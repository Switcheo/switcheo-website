import { Box, BoxProps, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent, SwitcheoLogo, ViewLink } from "../../../../../../components";
import { minBlockHeight } from "../../../../../../constants";

export type Product = {
  title: string;
  descriptor: string;
  description: string;
  highlight?: boolean;
  icon: string;
  link?: string;
};

export interface ProductColumnProps extends BoxProps {
  product: Product;
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5),
    minHeight: minBlockHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 3, 3),
      minHeight: 0,
    },
  },
  content: {
    color: theme.palette.primary.main,
    minHeight: 340,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      minHeight: 250,
    }
  },
  title: {
    display: "flex",
    flexDirection: "row",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 100,
  },
  link: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    "&:hover, &:focus": {
      color: theme.palette.primary.dark,
    },
    "&:hover $linkIcon, &:focus $linkIcon": {
      transform: "rotate(0)",
      color: theme.palette.primary.dark,
    },
  },
  linkIcon: {
    display: "inline-block",
    marginLeft: theme.spacing(1.5),
    height: ".5em",
    width: ".5em",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
  },
}));

const ProductColumn: React.FC<ProductColumnProps> = (props: any) => {
  const { children, product, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <SVGComponent className={classes.icon} url={product.icon} />
      <Divider className={classes.divider} />
      <Box className={classes.content}>
        <Typography className={classes.title} variant="body2" color="primary">{product.title}</Typography>
        <Typography variant="body2" color="primary">{product.descriptor}</Typography>
        <ViewLink target="_blank" href={product.link} />
        <Box flex={1} />
        <Typography variant="body2" color="primary">{product.description}</Typography>
      </Box>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default ProductColumn;