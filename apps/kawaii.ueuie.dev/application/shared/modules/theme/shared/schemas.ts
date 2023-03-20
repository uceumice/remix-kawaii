import { z } from "zod";

import * as Options from "./options";

// ----
export const name = z.enum(Options.names);
export const mode = z.enum(Options.modes);
