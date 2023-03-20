import { useNavigation } from "@remix-run/react";
import { useNProgress } from "@tanem/react-nprogress";

import { Bar } from "./components/bar";
import { Box } from "./components/box";

// ----
export function Progress() {
  const { state } = useNavigation();

  // [~]
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: state !== "idle",
    minimum: 0,
    animationDuration: 250,
    incrementDuration: 500,
  });

  return (
    <Box duration={animationDuration} finished={isFinished}>
      <Bar duration={animationDuration} progress={progress} />
    </Box>
  );
}
