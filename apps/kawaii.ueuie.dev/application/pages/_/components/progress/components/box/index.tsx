import clsx from "clsx";

interface Props {
  duration: number;
  finished: boolean;
}

// ----
export const Box = ({ finished, children }: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={clsx([
        "flex w-full",
        "z-50 h-0.5",
        "pointer-events-none",
        finished ? "opacity-0" : "opacity-100",
        "transition-opacity duration-200 ease-in-out",
      ])}
    >
      {children}
    </div>
  );
};
