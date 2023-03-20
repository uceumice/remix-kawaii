import { $path } from "@remix-kawaii/routes";
import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion";

// ----
export function ToTemplate({ children }: React.PropsWithChildren) {
  const l = useLocation();

  // ----
  const ConditionTemplateEditorOpen =
    l.pathname.startsWith(`${$path("/")}`) && !l.pathname.endsWith("/quick");

  // ----
  const key = ConditionTemplateEditorOpen ? "is-open" : "is-closed";

  // ----

  return (
    <motion.div
      key={key}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full"
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
