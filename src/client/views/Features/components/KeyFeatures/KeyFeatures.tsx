import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { FeatureColumn } from "./components";
import { Feature } from "./components/FeatureColumn/FeatureColumn";

import urlAccountIcon from "./assets/account.svg";
import urlCrossChainIcon from "./assets/cross-chain.svg";
import urlDecentralizationIcon from "./assets/decentralization.svg";
import urlSwitcheoChainIcon from "./assets/switcheo-chain.svg";
import urlTradehubIcon from "./assets/tradehub.svg";
import urlWalletIntegrationsIcon from "./assets/wallet-integrations.svg";

const DEFAULT_DESC = "Quatem re eatem dolumen et laborectures earcilitae quis accat que vellab is es et ex et ut repersp icature pudaeris digendandam, sinis simus dolorat uress molorun turempo";
const FEATURES: Feature[] = [{
  label: "Account",
  descriptors: ["Simple", "Familiar"],
  description: DEFAULT_DESC,
  icon: urlAccountIcon,
}, {
  label: "True Decentralization",
  descriptors: ["Unstoppable", "Secure", "Non-custodial"],
  description: DEFAULT_DESC,
  icon: urlDecentralizationIcon,
}, {
  label: "Cross-chain",
  descriptors: ["Atomic Swaps", "Encompassing", "Liquid"],
  description: DEFAULT_DESC,
  icon: urlCrossChainIcon,
}, {
  label: "TradeHub",
  inverse: true,
  descriptors: ["Fast settlement", "Instant execution"],
  description: DEFAULT_DESC,
  icon: urlTradehubIcon,
}, {
  label: "Wallet integrations",
  descriptors: ["Extensive", "Community-driven"],
  description: DEFAULT_DESC,
  icon: urlWalletIntegrationsIcon,
}, {
  label: "SwitcheoChain",
  descriptors: ["Lorem ipsum"],
  description: DEFAULT_DESC,
  icon: urlSwitcheoChainIcon,
}];

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(3),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
    },
  },
  title: {
    position: "absolute",
    left: theme.spacing(3),
    top: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(0, 1.5),
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  item: {
    "@media (max-width: 459.95px)": {
      maxWidth: "100%",
      flexBasis: "100%",
    },
  },
}));
const KeyFeatures: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Typography className={classes.title} variant="h2">Key features</Typography>
      <Grid className={classes.container} container>
        {FEATURES.map((feature, index) => (
          <Grid className={classes.item} item xl={2} sm={4} xs={6}>
            <FeatureColumn feature={feature} index={index + 1} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default KeyFeatures;