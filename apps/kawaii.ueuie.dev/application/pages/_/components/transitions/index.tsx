import { AnimatePresence } from "framer-motion";
import React from "react";

import { ToTemplate } from "./template";

// ----
export function Transitions({ children }: React.PropsWithChildren) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ToTemplate>{children}</ToTemplate>
    </AnimatePresence>
  );
}
