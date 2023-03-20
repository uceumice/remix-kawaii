import type { language } from "./schemas";
import type { z } from "zod";

// ----
export type Language = z.infer<typeof language>;
