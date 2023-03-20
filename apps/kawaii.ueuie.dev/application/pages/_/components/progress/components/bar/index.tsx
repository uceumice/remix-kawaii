import clsx from "clsx";

interface Props {
  duration: number;
  progress: number;
}

export const Bar = ({ duration, progress }: Props) => {
  return (
    <div
      className={clsx([
        "fixed left-0 top-0",
        "z-top",
        "h-1 w-full",
        "bg-primary",
      ])}
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin ${duration}ms linear`,
      }}
    />
  );
};
