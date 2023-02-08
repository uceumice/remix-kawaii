const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./application/**/*.tsx"],
  darkMode: "class",
  theme: {
    colors: {
      base: colors.zinc[50],
      fill: colors.zinc[200],
      primary: colors.zinc,
      secondary: colors.amber,
      neutral: colors.neutral,
      // Tools
      white: colors.white,
      black: colors.black,
    },

    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
      "4xl": "2100px",
      "5xl": "4200px",
    },
    letterSpacing: {
      tightest: "-.1em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {
      screens: {
        xs: "425px",
      },
      zIndex: {
        top: 1_000_000_000
      },
      colors: {
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        error: colors.red,
      },
      boxShadow: {
        slider: "0 0 0 5px rgba(0, 0, 0, 0.3)",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      keyframes: {
        // Text shimmer
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        // Dropdown menu
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // Navigation menu
        "enter-from-right": {
          "0%": { transform: "translateX(200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "enter-from-left": {
          "0%": { transform: "translateX(-200px)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "exit-to-right": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(200px)", opacity: 0 },
        },
        "exit-to-left": {
          "0%": { transform: "translateX(0)", opacity: 1 },
          "100%": { transform: "translateX(-200px)", opacity: 0 },
        },
        "scale-in-content": {
          "0%": { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
          "100%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
        },
        "scale-out-content": {
          "0%": { transform: "rotateX(0deg) scale(1)", opacity: 1 },
          "100%": { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
      },
      animation: {
        // Text shimmer
        "text-shimmer": "text-shimmer 5s ease-in-out infinite alternate",
        // Dropdown menu
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Navigation menu
        "enter-from-right": "enter-from-right 0.25s ease",
        "enter-from-left": "enter-from-left 0.25s ease",
        "exit-to-right": "exit-to-right 0.25s ease",
        "exit-to-left": "exit-to-left 0.25s ease",
        "scale-in-content": "scale-in-content 0.2s ease",
        "scale-out-content": "scale-out-content 0.2s ease",
        "fade-in": "fade-in 0.2s ease",
        "fade-out": "fade-out 0.2s ease",
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right":
          "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom":
          "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out": "toast-swipe-out 100ms ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { "text-shadow": (value) => { return ({ textShadow: value }) } },
        { values: theme("textShadow") },
      );
    }),
    function ({ addUtilities, matchUtilities, theme }) {
      const utilities = {
        '.bg-stripes': {
          backgroundImage:
            'linear-gradient(var(--stripes-rotate), var(--stripes-color) 12.50%, transparent 12.50%, transparent 50%, var(--stripes-color) 50%, var(--stripes-color) 62.50%, transparent 62.50%, transparent 100%)',
          backgroundSize: 'var(--stripes-gap) var(--stripes-gap)',
        },
      }

      // Colors
      const addColor = (name, color) =>
        (utilities[`.bg-stripes-${name}`] = { '--stripes-color': color })

      const colors = flattenColorPalette(theme('backgroundColor'))

      for (let name in colors) {
        try {
          const [r, g, b, a] = toRgba(colors[name])
          if (a !== undefined) {
            addColor(name, colors[name])
          } else {
            addColor(name, `rgba(${r}, ${g}, ${b}, 0.4)`)
          }
        } catch (_) {
          addColor(name, colors[name])
        }
      }


      matchUtilities(
        {
          "bg-stripes-gap": (value) => ({
            "--stripes-gap": value
          }),
        },
        { values: theme('width') }
      );

      // Rotate
      const _rotate = (name, size) => {
        utilities[`.bg-stripes-rotate-${name}`] = { '--stripes-rotate': size }
        utilities[`.-bg-stripes-rotate-${name}`] = { '--stripes-rotate': "-" + size }
      }

      Object.entries(theme("rotate")).forEach(([alias, value]) => {
        _rotate(alias, value)
      });


      // Register
      addUtilities(utilities)
    },
  ],

};

const toRgba = (hexCode, opacity = 50) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity / 100})`;
};

const flattenColorPalette = (obj, sep = '-') => Object.assign(
  {},
  ...function _flatten(o, p = '') {
    return [].concat(...Object.keys(o)
      .map(k =>
        typeof o[k] === 'object' ?
          _flatten(o[k], k + sep) :
          ({ [p + k]: o[k] })
      )
    );
  }(obj)
);
