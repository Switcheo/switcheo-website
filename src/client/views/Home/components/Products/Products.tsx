import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import urlDemexIcon from "./assets/demex-logo.svg";
import urlFoundationIcon from "./assets/foundation-logo.svg";
import urlSwitcheoIcon from "./assets/switcheo-logo.svg";
import urlZilswapIcon from "./assets/zilswap-logo.svg";
import ProductEntry from "./components";
import { Paths } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
  },
  container: {
    flex: 1,
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: 640,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 480,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  description: {
    marginBottom: theme.spacing(8),
  },
  products: {
    flex: 1,
    width: "100%",
    marginBottom: theme.spacing(8),
  },
  ctaIcon: {
    marginLeft: theme.spacing(8),
    color: theme.palette.text.secondary,
  },
}));

const Products: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <Box className={classes.container}>
        <ContentTitle large>Our products</ContentTitle>
        <Typography className={classes.description} color="primary" variant="body1">
          Built to enable trustless transfers across
          blockchains in a practical manner and deliver a
          world-class trading experience without
          compromising on trustlessness.
        </Typography>

        <Box className={classes.products}>
          <ProductEntry iconUrl={urlSwitcheoIcon}>Switcheo Exchange</ProductEntry>
          <ProductEntry iconUrl={urlDemexIcon}>Demex</ProductEntry>
          <ProductEntry iconUrl={urlZilswapIcon}>ZilSwap</ProductEntry>
          <ProductEntry iconUrl={urlFoundationIcon}>Switcheo Foundation</ProductEntry>
        </Box>

        <Box flex={1} />
        <CTAButton href={Paths.products} white>Explore products</CTAButton>
      </Box>
    </ContentSection>
  );
};

export default Products;