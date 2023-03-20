import type * as Schemas from "./schemas";
import type { z } from "zod";

// ----
export type Name = z.infer<typeof Schemas.name>;
export type Mode = z.infer<typeof Schemas.mode>;
