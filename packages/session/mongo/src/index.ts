import {
  CreateSessionStorageFunction,
  SessionData,
  SessionStorage,
} from "@remix-run/server-runtime";
import {
  CreateMongoSessionStorageFunction,
  MongoSessionStorageOptions,
  SessionDocument,
} from "./types";
import { ObjectId } from "bson";
import { UpdateFilter } from "mongodb";

// ----
export function createMongoDBSessionStorageFactory(
  createSessionStorage: CreateSessionStorageFunction,
): CreateMongoSessionStorageFunction {
  return function <Data = SessionData, FlashData = Data>({
    cookie,
    driver,
  }: MongoSessionStorageOptions<Data, FlashData>): SessionStorage<
    Data,
    FlashData
  > {
    return createSessionStorage({
      cookie,
      async createData(data, expires) {
        // [1.1] insert document into the collection
        const { insertedId } = await driver.insertOne({
          data: data,
          meta: {
            expires: expires,
            modified: new Date(),
          },
        });

        // [1.2] create TTL index
        await driver.createIndex(
          { "meta.expires": 1 },
          { expireAfterSeconds: 0 },
        );

        // return id of the inserted document
        return insertedId.toHexString();
      },
      async readData(id) {
        // [1.1] read the document from a database
        const found = await driver.findOne({
          _id: new ObjectId(id),
          $or: [
            { expires: { $exists: false } },
            { expires: { $gt: new Date() } },
          ],
        });

        if (!found) {
          return null;
        }

        return found.data;
      },
      async updateData(id, data, expires) {
        const update: UpdateFilter<SessionDocument<Data, FlashData>> = {};

        // [1.1] replace existing data with modified
        update["$set"] = { data: data };

        // [1.2] remove expires entry if "undefined"
        if (!expires) {
          update["$unset"] = { "meta.expires": 1 };
        }

        // [2] apply the update
        await driver.updateOne({ _id: new ObjectId(id) }, update);
      },
      async deleteData(id) {
        await driver.deleteOne({ _id: new ObjectId(id) });
      },
    });
  };
}
