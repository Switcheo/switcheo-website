import { Box, makeStyles, Theme } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import { Product } from "src/utils/types";

interface Props {
  product: Product
}

const AreaCircle: React.FC<Props> = (props: Props) => {
  const { product } = props;
  const classes = useStyles();

  return (
    <Link href={product.url} passHref>
      <Box className={classes.product}>
        <Box className={classes.icon}>
        {product.icon}
        </Box>
        <Box className={classes.productName}>
          {product.name}
        </Box>
      </Box>
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  product: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.only("md")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(1),
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  productName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.3125rem",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.875rem",
      marginLeft: theme.spacing(1),
    },
  },
  icon: {
    width: "3.75rem",
    marginTop: theme.spacing(1),
    [theme.breakpoints.only("xs")]: {
      width: "1.75rem",
    },
  },
}));

export default AreaCircle;
