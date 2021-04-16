import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { ReactComponent as DemexIcon } from "./assets/demex-logo.svg";
import { ReactComponent as FoundationIcon } from "./assets/foundation-logo.svg";
import { ReactComponent as SwitcheoIcon } from "./assets/switcheo-logo.svg";
import { ReactComponent as ZilswapIcon } from "./assets/zilswap-logo.svg";
import { ReactComponent as SwitcheoTokenIcon } from "./assets/switcheo-token.svg";
import ProductEntry from "./components";
import { Paths } from "../../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 3, 6),
    },
  },
  title: {
    fontSize: "84px",
    lineHeight: "84px",
    letterSpacing: "-1px",
    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      lineHeight: "50px",
      letterSpacing: "-.5px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "32px",
    },
  },
  container: {
    flex: 1,
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: 480,
    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: 640,
    // },
    [theme.breakpoints.down("md")]: {
      maxWidth: 380,
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
        <ContentTitle className={classes.title}>Reimagine decentralization</ContentTitle>
        <Typography className={classes.description} color="primary" variant="body1">
          As pioneers of the decentralized world, we constantly
          dive headfirst into new realms. We build unstoppable
          platforms that enable a global financial ecosystem
          without unjust barriers or unnecessary intermediaries.
        </Typography>

        <Box className={classes.products}>
          <ProductEntry icon={SwitcheoIcon} href={Paths.tradescan}>Switcheo TradeHub (Explorer)</ProductEntry>
          <ProductEntry icon={DemexIcon} href={Paths.demex}>Demex</ProductEntry>
          <ProductEntry icon={ZilswapIcon} href={Paths.zilswap}>ZilSwap</ProductEntry>
          {/* <ProductEntry icon={SwitcheoTokenIcon} href={Paths.staking}>Switcheo Token</ProductEntry> */}
        </Box>

        <Box flex={1} />
        <CTAButton href={Paths.products} white>Explore ecosystem</CTAButton>
      </Box>
    </ContentSection>
  );
};

export default Products;
