import palette from "./palette";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { Theme } from "@material-ui/core";

const typography = (theme: Theme): TypographyOptions => ({
  fontFamily: [
    "Union",
    "-apple-system",
    "BlinkMacSystemFont",
    "'Segoe UI'",
    "Roboto",
    "'Helvetica Neue'",
    "Arial",
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
  ].join(","),
  h1: {
  },
  h2: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: "48px",
    lineHeight: "48px",
    letterSpacing: "-1.5px",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      letterSpacing: "-1px",
      lineHeight: "32px",
      marginBottom: theme.spacing(2),
    },
  },
  h3: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: "35px",
    lineHeight: "35px",
    letterSpacing: "-1.5px",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      letterSpacing: "-1px",
      marginBottom: theme.spacing(2),
    },
  },
  h4: {
    color: palette.text.primary,
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      letterSpacing: "-0.75px",
      lineHeight: "20px",
    },
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "16px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: "14px",
    letterSpacing: "-0.05px",
    lineHeight: "20px"
  },
  subtitle1: {
    fontSize: 36,
    marginBottom: theme.spacing(3),
    lineHeight: 1.25,
    letterSpacing: "-.25px",

    [theme.breakpoints.down("md")]: {
      fontSize: 28,
      lineHeight: 1.3,
      letterSpacing: "0",
      marginBottom: theme.spacing(2),
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      marginBottom: theme.spacing(5),
    },
  },
  subtitle2: {
    marginBottom: theme.spacing(1),
    color: palette.text.secondary,
    fontSize: "16px",
    letterSpacing: "0.2px",
    lineHeight: "21px"
  },
  body1: {
    color: palette.text.secondary,
    fontSize: "24px",
    letterSpacing: "-0.25px",
    lineHeight: 1.25,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      lineHeight: 1.3,
      letterSpacing: "0",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      marginBottom: theme.spacing(2),
    },
  },
  body2: {
    color: palette.text.secondary,
    letterSpacing: "-0.25px",
    fontSize: "24px",
    lineHeight: "32px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  button: {
    color: palette.text.primary,
    fontSize: "14px"
  },
  caption: {
    color: palette.text.secondary,
    fontSize: "11px",
    letterSpacing: "0.33px",
    lineHeight: "13px"
  },
  overline: {
    color: palette.text.secondary,
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.33px",
    lineHeight: "13px",
    textTransform: "uppercase"
  },
});


export default typography;