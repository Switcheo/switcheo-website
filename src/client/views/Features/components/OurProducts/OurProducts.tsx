import { Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { ProductColumn } from "./components";
import { Product } from "./components/ProductColumn/ProductColumn";
import urlDemexIcon from "./assets/demex-logo.svg";
import urlFoundationIcon from "./assets/foundation-logo.svg";
import urlSwitcheoIcon from "./assets/switcheo-logo.svg";
import urlZilswapIcon from "./assets/zilswap-logo.svg";
import { Paths } from "../../../../constants";

const PRODUCTS: Product[] = [{
  title: "Switcheo Exchange",
  descriptor: "The Preferred Exchange, trading on Ethereum, Neo, and more.",
  description: "Switcheo paves the way for a secure multi-chain trading experience that is practical even for a crypto beginner. Trade while retaining control of your funds. No mandatory registration.",
  link: Paths.exchange,
  icon: urlSwitcheoIcon,
}, {
  title: "Demex",
  descriptor: "The Decentralised Mercantile Exchange",
  description: "Demex is the first fully decentralized platform that supports any type of financial market possible. It is set to run on the Switcheo TradeHub decentralized trading protocol.",
  icon: urlDemexIcon,
// }, {
//   title: "ZilSwap",
//   descriptor: "Atomic Swaps",
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   icon: urlZilswapIcon,
}, {
  title: "Switcheo Foundation",
  descriptor: "An Initiative to Democratize Financial Markets.",
  description: "Switcheo Foundation is a not-for-profit endeavor. Its mission is to champion the growth of a radically decentralized financial system that is truly open. ",
  link: Paths.foundation,
  icon: urlFoundationIcon,
}];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      padding: 0,
    },
  },
  container: {
  },
  intro: {
    padding: theme.spacing(3),
    // maxWidth: 480,
    maxWidth: 800,
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
    <Container maxWidth="lg" {...rest} className={cls(classes.root, className)}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Box className={classes.intro}>
            <Typography variant="h2" color="primary">Our ecosystem</Typography>
            <Typography variant="body1" color="primary">
              As pioneers of the decentralized world, we constantly dive
              headfirst into new realms, building unstoppable products
              that enable a global financial ecosystem without unjust
              barriers and unnecessary intermediaries.
            </Typography>
          </Box>
        </Grid>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} item className={classes.item} sm={4} xs={6}>
            <ProductColumn product={product} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;