import { Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { ProductColumn } from "./components";
import { Product } from "./components/ProductColumn/ProductColumn";
import { ReactComponent as DemexIcon } from "./assets/demex-logo.svg";
import { ReactComponent as SwitcheoIcon } from "./assets/switcheo-logo.svg";
import { ReactComponent as ZilswapIcon } from "./assets/zilswap-logo.svg";
import { Paths } from "../../../../constants";

const PRODUCTS: Product[] = [
  {
  title: "Switcheo TradeHub (Explorer)",
  descriptor: "A fully decentralized layer 2 cross-chain trading protocol.",
  description: "Switcheo TradeHub is a custom-built sidechain for trading that utilizes Cosmos SDK as its primary building block. It is designed to support high-performance trading of any financial asset, at scale.",
  link: Paths.tradescan,
  icon: SwitcheoIcon,
  highlight: true,
  responsive: {
    md: 4, sm: 6,
  }, 
 }, 
 {
  title: "Demex",
  descriptor: "The Decentralized Mercantile Exchange.",
  description: "Demex is a 2nd-generation derivatives DEX powered by the Switcheo TradeHub protocol. Trade any financial asset imaginable on the first exchange to integrate on-chain liquidity pools with order books.",
  link: Paths.demex,
  icon: DemexIcon,
  responsive: {
    md: 4, sm: 6,
  },
 }, 
 {
   title: "ZilSwap",
   descriptor: "A Decentralized Token Swap Protocol.",
   description: "Built by Switcheo Labs, ZilSwap is an on-chain DEX on Zilliqa. Swap assets directly or provide liquidity to earn passively. Switcheo TradeHub will soon integrate Zilliqa to leverage ZilSwap liquidity.",
   link: Paths.zilswap,
   icon: ZilswapIcon,
   highlight: true,
   responsive: {
     md: 4, sm: 6,
   },
 }, 
// {
//   title: "Switcheo Token",
//   descriptor: "The native token of Switcheo TradeHub.",
//   description: "SWTH is Switcheo TradeHub’s governance token with a staking functionality at its core. SWTH secures the protocol across a network of validators and is also used for transaction fees.",
//   link: Paths.swthToken,
//   icon: SwitcheoTokenIcon,
//   responsive: {
//     md: 4, sm: 6,
//   },
// }, 
];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      padding: 0,
    },
  },
  introContainer: {
    display: "flex",
  },
  intro: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6,3)
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3)
    },
  },
  item: {
    flexGrow: 1,
    "@media (max-width: 459.95px)": {
      maxWidth: "100%",
      height: "36rem",
      flexBasis: "100%",
    },
  }
}));
const OurProducts: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Container maxWidth="lg" {...rest} className={cls(classes.root, className)}>
      <Grid container>
        <Grid item sm={12} md={8} className={classes.introContainer}>
          <Box className={classes.intro}>
            <Typography variant="h2" color="primary" className={classes.title}>Reimagine Decentralization</Typography>
            <Typography variant="body1" color="primary">
              As pioneers of the decentralized world, we constantly dive
              headfirst into new realms, building unstoppable platforms
              that enable a global financial ecosystem without unjust
              barriers and unnecessary intermediaries.
            </Typography>
          </Box>
        </Grid>
        {PRODUCTS.map((product, index) => (
          <Grid key={index} item className={classes.item} {...product.responsive}>
            <ProductColumn product={product} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;
