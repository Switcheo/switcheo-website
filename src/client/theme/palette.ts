import { colors } from '@material-ui/core';
import { PaletteOptions, PaletteColorOptions, TypeText } from "@material-ui/core/styles/createPalette";

interface MyPaletteOptions extends PaletteOptions {
  text: Partial<TypeText>;
}

const white = '#FFFFFF';
const black = '#000000';

const palette: MyPaletteOptions = {
  primary: {
    main: "#063C4F",
    dark: "#517684",
    light: "#5E8871"
  },
  secondary: {
    main: "#E2FCA4",
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  text: {
    primary: "#063C4F",
    secondary: white,
  },
  background: {
    default: white,
    paper: white,
  },
};


export default palette;