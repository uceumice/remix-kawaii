import { ToggleTheme } from "@/shared/components/toggle-theme";
import { IcKawaiiEyes } from "@/shared/icons/kawaii-eyes";
import { Outlet } from "@remix-run/react";
import clsx from "clsx";
import { RxGithubLogo } from "react-icons/rx";

// ----
export function $$Docs() {
  return (
    <div className={clsx(["w-full h-full", "flex gap-0"])}>
      <div
        className={clsx([
          "fixed",
          "bg-base-100",
          "flex-shrink-0",
          "flex justify-between items-center",
          // Desktop
          "md:w-20 md:h-full",
          "md:py-5",
          "md:flex-col",
          // Mobile
          "w-full h-20",
          "px-5",
          "flex-row",
        ])}
      >
        <a href="https://github.com/uceumice/remix-kawaii#readme">
          <IcKawaiiEyes className={clsx(["w-16 h-16"])} />
        </a>

        <div className="flex flex-col gap-2 items-center">
          <a
            className="btn btn-circle btn-outline rounded-full mt-5 gap-4 uppercase font-bold"
            href="https://github.com/uceumice/remix-kawaii#readme"
          >
            <RxGithubLogo className="w-5 h-5" />
          </a>
          <ToggleTheme />
        </div>
      </div>
      <div
        className={clsx([
          "w-full h-full",
          "md:px-0 max-md:px-5",
          "md:pl-20 max-md:pt-20",
        ])}
      >
        <Outlet />
      </div>
    </div>
  );
}
