import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';


// ./overrides is coded in .js, no plans to convert it to .ts

// @ts-ignore
const flavour = (component, theme) => {
  if (typeof component === "function")
    return component(theme);

  const result = {};
  for (const key in component)
    // @ts-ignore
    result[key] = component[key](theme);
  return result;
}

const flavouringTheme = createMuiTheme({ palette });
const AppTheme = createMuiTheme({
  // @ts-ignore
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: flavour(overrides, flavouringTheme),
  palette,
  typography: flavour(typography, flavouringTheme),
});

export default AppTheme;
