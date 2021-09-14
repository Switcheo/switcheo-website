import { Box, Hidden, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { CarbonIcon, DecentralizedInfrastructuresBg, DemexIcon, DecentralizedInfrastructuresIcon, InnovativeDAppsBg, InnovativeDAppsIcon, SwitcheoDevFundIcon, WhiteSpacesBg, WhiteSpacesIcon, ZilswapIcon } from "src/assets/innovation";
import { DesktopAreas, MobileAreas } from "./components";
import { InnovationArea, InnovationAreaContent } from "src/utils/types";

const InnovationAreas: React.FC = () => {
  const classes = useStyles();

  const areas: InnovationAreaContent[] = [
    {
      area: InnovationArea.DecentralizedInfrastructures,
      title: "Decentralized Infrastructures",
      icon: DecentralizedInfrastructuresIcon,
      background: DecentralizedInfrastructuresBg,
      description: "We push the boundaries of DeFi by making the impossible a reality. If you have thought of something useful in DeFi that doesn’t exist yet, we are probably already building it.",
      products: [{
        icon: <CarbonIcon />,
        name: "Carbon Protocol",
      }],
    },
    {
      area: InnovationArea.InnovativeDApps,
      title: "Innovative dApps",
      icon: InnovativeDAppsIcon,
      background: InnovativeDAppsBg,
      description: "We lay the groundwork for decentralized, censorship-resistant ecosystems to thrive on. We incubate networks and partnerships that empower the new movers and shakers of the future.",
      products: [{
        icon: <DemexIcon />,
        name: "Demex",
      }, {
        icon: <ZilswapIcon />,
        name: "Zilswap",
      }],
    },
    {
      area: InnovationArea.WhiteSpaces,
      title: "White Spaces",
      icon: WhiteSpacesIcon,
      background: WhiteSpacesBg,
      description: "We are unafraid to dive headfirst into new realms, do the unexpected and lead the charge to uncover new ground and new spaces. We don’t believe in competition because we create new demand.",
      products: [{
        icon: <SwitcheoDevFundIcon />,
        name: "Switcheo Dev Fund",
      }],
    },
  ];

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <DesktopAreas areas={areas} />
      </Hidden>
      <Hidden mdUp>
        <MobileAreas areas={areas} />
      </Hidden>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
}));

export default InnovationAreas;
