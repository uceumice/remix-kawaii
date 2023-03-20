import { ToggleTheme } from "@/shared/components/toggle-theme";
import clsx from "clsx";
import { RxChevronRight, RxGithubLogo } from "react-icons/rx";

// ----
export function $$Docs$Index() {
  return (
    <div
      className={clsx([
        "w-full h-full",
        "flex flex-col justify-center items-center",
      ])}
    >
      <main className={clsx(["prose"])}>
        <img src="https://raw.githubusercontent.com/uceumice/remix-kawaii/master/.assets/banner.png" />
        <p className="text-justify max-md:text-center">
          The docs are currently i n a development. Come by another time, they
          may already be live by then. For now all of relevant information can
          be found on our GitHub.
        </p>
      </main>
      <a
        className="btn btn-md btn-outline rounded-full mt-5 gap-4 uppercase font-bold"
        href="https://github.com/uceumice/remix-kawaii#readme"
      >
        To GitHub
        <RxGithubLogo className="w-5 h-5" />
      </a>
    </div>
  );
}
