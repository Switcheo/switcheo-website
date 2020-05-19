import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent, SwitcheoLogo } from "../../../../../../components";

export type ProductEntryProps = {
  iconUrl: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    color: theme.palette.primary.main,
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    "&:first-child": {
      borderTop: `1px solid ${theme.palette.primary.main}`,
    }
  },
  icon: {
    color: theme.palette.primary.main,
    height: 32,
    width: 32,
    marginRight: theme.spacing(2.5),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      height: 24,
      width: 24,
    },
  },
  text: {
    flex: 1,
  },
  switcheoIcon: {
    height: 24,
    width: 24,
    [theme.breakpoints.down("md")]: {
      height: 20,
      width: 20,
    },
  },
}));
const ProductEntry: React.FC<ProductEntryProps & React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, iconUrl, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <SVGComponent className={classes.icon} url={iconUrl} />
      <Typography color="primary" className={classes.text} variant="body2">{children}</Typography>
      <SwitcheoLogo className={classes.switcheoIcon} />
    </Box>
  );
};

export default ProductEntry;