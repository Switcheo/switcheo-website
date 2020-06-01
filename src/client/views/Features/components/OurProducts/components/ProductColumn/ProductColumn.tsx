import { Box, BoxProps, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SVGComponent, SwitcheoLogo } from "../../../../../../components";
import { minBlockHeight } from "../../../../../../contants";

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
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
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
    textDecoration: "none",
    "& span": {
      fontWeight: "bold",
    },
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
  extLinkIcon: {
    color: theme.palette.primary.main,
    height: 20,
    width: 20,
    marginLeft: "auto",
    flexShrink: 0,
    [theme.breakpoints.down("md")]: {
      height: 18,
      width: 18,
    }
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
        <Typography component="a" target="_blank" href={product.link} className={classes.title}>
          <Typography component="span" variant="body2" color="primary">{product.title}</Typography>
          <SwitcheoLogo className={classes.extLinkIcon} />
        </Typography>
        <Typography variant="body2" color="primary">{product.descriptor}</Typography>
        <Box flex={1} />
        <Typography variant="body2" color="primary">{product.description}</Typography>
      </Box>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default ProductColumn;