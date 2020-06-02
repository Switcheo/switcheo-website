import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { ProductColumn } from "./components";
import { Product } from "./components/ProductColumn/ProductColumn";
import urlDemexIcon from "./assets/demex-logo.svg";
import urlFoundationIcon from "./assets/foundation-logo.svg";
import urlSwitcheoIcon from "./assets/switcheo-logo.svg";
import urlZilswapIcon from "./assets/zilswap-logo.svg";
import { Paths } from "../../../../contants";

const PRODUCTS: Product[] = [{
  title: "Switcheo Exchange",
  descriptor: "The Preferred Exchange Available on Ethereum, EOS and NEO Blockchains.",
  description: "Switcheo paves the way for a trustless and secure multi-chain trading experience. No mandatory registration. Connect and trade freely.",
  highlight: true,
  link: Paths.exchange,
  icon: urlSwitcheoIcon,
}, {
  title: "Demex",
  descriptor: "The Decentralised Mercantile Exchange",
  description: "Demex is the first fully decentralized platform that supports any type of financial market possible. ",
  icon: urlDemexIcon,
}, {
  title: "ZilSwap",
  descriptor: "Atomic Swaps",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  icon: urlZilswapIcon,
}, {
  title: "Switcheo Foundation",
  descriptor: "An Initiative to Democratize Financial Markets",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  link: Paths.foundation,
  icon: urlFoundationIcon,
}];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  container: {
  },
  intro: {
    padding: theme.spacing(3),
    maxWidth: 480,
  },
  item: {
    "@media (max-width: 459.95px)": {
      maxWidth: "100%",
      flexBasis: "100%",
      paddingBottom: theme.spacing(10),
    },
  }
}));
const OurProducts: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Grid container className={classes.container}>
        <Grid item xl={4} sm={8} xs={12}>
          <Box className={classes.intro}>
            <Typography variant="h2" color="primary">Our products</Typography>
            <Typography variant="body1" color="primary">Built to enable trustless transfers across blockchains in a practical manner and deliver a world-class trading experience without compromising on trustlessness.</Typography>
          </Box>
        </Grid>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} item className={classes.item} xl={2} sm={4} xs={6}>
            <ProductColumn product={product} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurProducts;