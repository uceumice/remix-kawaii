import { z } from "zod";

import { languages } from "./options";

// ----
export const language = z.enum(languages);
