import { blackA, sand, sandDark, whiteA } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

import type { Property } from "@stitches/react/types/css";

// ---- [create]
export const {
  styled,
  getCssText,
  createTheme,
  globalCss,
  css,
  prefix,
  config,
  keyframes,
  reset,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...sand,
      ...whiteA,
      bg_base: "#fff",
      bg_fill: "$sand3",
      primary: "$sand11",
      anchor: "$sand4",
      text: "$sand12",
      text_disabled: "$sand8",
      shadowy: "$blackA7",
    },
    space: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
    },
    radii: {
      full: "9999px",
      md: "1rem",
    },
    sizes: {
      "0": "0px",
      px: "1px",
      "1": "0.25rem",
      "1.5": "0.375rem",
      "2": "0.5rem",
      "2.5": "0.625rem",
      "3": "0.75rem",
      "14": "3.5rem",
      "icon-sm": "24",
    },
    fontSizes: {
      tooltip: "0.875rem",
    },
    fonts: {
      primary: "Archivo",
      cursive: "Söhne Mono, menlo, monospace",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
    bp4: "(min-width: 1280px)",
    "max-md": "(max-width: 640px)",
  },
  utils: {
    px: (v?: Property.Padding) => {
      return {
        paddingLeft: v,
        paddingRight: v,
      };
    },
    py: (v?: Property.Padding) => {
      return {
        paddingTop: v,
        paddingBottom: v,
      };
    },
  },
});

// ---- [themes]
export const themeDark = createTheme({
  colors: {
    ...sandDark,
    ...blackA,
    bg_base: "#000",
  },
});

// ---- [global]
export const applyGlobalStitchStyles = globalCss({
  "::-moz-selection": {
    color: "$bg_base",
    background: "$primary",
  },
  "::selection": {
    color: "$bg_base",
    background: "$primary",
  },
});
