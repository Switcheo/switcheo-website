import { createTheme } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const flavour = (component: any, theme: Theme) => {
  if (typeof component === "function")
    return component(theme);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {};
  for (const key in component)
    result[key] = component[key](theme);
  return result;
};

const flavouringTheme = createTheme({ palette });
const theme = createTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette,
  typography: flavour(typography, flavouringTheme),
});

export default theme;
