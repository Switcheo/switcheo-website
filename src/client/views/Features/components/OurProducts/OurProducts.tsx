import { Box, Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { ProductColumn } from "./components";
import { Product } from "./components/ProductColumn/ProductColumn";
import { ReactComponent as DemexIcon } from "./assets/demex-logo.svg";
import { ReactComponent as FoundationIcon } from "./assets/foundation-logo.svg";
import { ReactComponent as SwitcheoIcon } from "./assets/switcheo-logo.svg";
import { ReactComponent as ZilswapIcon } from "./assets/zilswap-logo.svg";
import { Paths } from "../../../../constants";

const PRODUCTS: Product[] = [{
  title: "Switcheo Exchange",
  descriptor: "The Preferred Exchange, trading on Ethereum, Neo, and more.",
  description: "Switcheo paves the way for a secure multi-chain trading experience that is practical even for a crypto beginner. Trade while retaining control of your funds. No mandatory registration.",
  link: Paths.exchange,
  icon: SwitcheoIcon,
  responsive: {
    md: 4, sm: 6,
  },
}, {
  title: "ZilSwap",
  descriptor: "Decentralized Atomic Swaps",
  description: "Zilswap is a fully decentralized protocol for ZRC-2 token exchanges on Zilliqa.",
  link: Paths.zilswap,
  icon: ZilswapIcon,
  responsive: {
    md: 4, sm: 6,
  },
}, {
  title: "Demex",
  descriptor: "The Decentralized Mercantile Exchange",
  description: "Demex is the first fully decentralized platform that supports any type of financial market possible. It is set to run on the Switcheo TradeHub decentralized trading protocol.",
  icon: DemexIcon,
  highlight: true,
  responsive: {
    md: 4, sm: 6,
  },
}, {
  title: "Switcheo Foundation",
  descriptor: "An Initiative to Democratize Financial Markets.",
  description: "Switcheo Foundation is a not-for-profit endeavor. Its mission is to champion the growth of a radically decentralized financial system that is truly open. ",
  link: Paths.foundation,
  icon: FoundationIcon,
  responsive: {
    md: 4, sm: 6,
  },
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
  introContainer: {
    display: "flex",
  },
  intro: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
      <Grid container>
        <Grid item sm={12} md={8} className={classes.introContainer}>
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
          <Grid key={index} item className={classes.item} {...product.responsive}>
            <ProductColumn product={product} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurProducts;
