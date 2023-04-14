import {
  FlashSessionData,
  SessionData,
  SessionIdStorageStrategy,
  SessionStorage,
} from "@remix-run/server-runtime";
import type { Collection } from "mongodb";

// ----
export interface MongoSessionStorageOptions<
  Data = SessionData,
  FlashData = Data,
> {
  /**
   * The Cookie used to store the session id on the client, or options used
   * to automatically create one.
   */
  cookie?: SessionIdStorageStrategy["cookie"];
  /**
   * The instanciated MongoDB collection where the session documents are
   * stored.
   */
  driver: Collection<SessionDocument<Data, FlashData>>;
}

// ----
export type CreateMongoSessionStorageFunction = <
  Data = SessionData,
  FlashData = Data,
>(
  options: MongoSessionStorageOptions<Data, FlashData>,
) => SessionStorage<Data, FlashData>;

// ----
export type SessionDocument<Data = SessionData, FlashData = Data> = {
  data: FlashSessionData<Data, FlashData>;
  // ----
  meta: {
    expires?: Date;
    modified?: Date;
  };
};
