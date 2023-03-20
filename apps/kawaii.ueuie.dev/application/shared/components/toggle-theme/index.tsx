import { useThemeStore } from "@/shared/modules/theme/store";
import clsx from "clsx";
import { useMemo } from "react";
import { RxSun, RxMoon, RxDot } from "react-icons/rx";

export function ToggleTheme() {
  const mode = useThemeStore((s) => s.mode);
  const change = useThemeStore((s) => s.setNextMode);

  const Icon = useMemo(() => {
    if (mode === "dark") return RxSun;
    if (mode === "light") return RxMoon;
    return RxDot;
  }, [mode]);

  return (
    <button
      className={clsx(["btn btn-md btn-circle btn-outline"])}
      onClick={change}
    >
      <Icon className={clsx(["w-5 h-5"])} />
    </button>
  );
}
