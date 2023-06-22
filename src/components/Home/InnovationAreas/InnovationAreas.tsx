import { Box, Hidden } from "@material-ui/core";
import React from "react";
import { CarbonIcon, DecentralizedInfrastructuresBg, DemexIcon, DecentralizedInfrastructuresIcon, InnovativeDAppsBg, InnovativeDAppsIcon, SwitcheoDevFundIcon, WhiteSpacesBg, WhiteSpacesIcon, ZilswapIcon, TBMIcon, ZolarIcon } from "src/assets/innovation";
import { DesktopAreas, MobileAreas } from "./components";
import { InnovationAreaContent } from "src/utils/types";
import { Paths } from "src/utils/paths";

const InnovationAreas: React.FC = () => {

  const areas: InnovationAreaContent[] = [
    {
      title: "Decentralized Infrastructures",
      icon: DecentralizedInfrastructuresIcon,
      background: DecentralizedInfrastructuresBg,
      description: "We lay the groundwork for decentralized, censorship-resistant ecosystems to thrive on. We incubate networks and partnerships that empower the new movers and shakers of the future.",
      products: [{
        icon: <CarbonIcon />,
        name: "Carbon Protocol",
        url: Paths.carbon,
      }],
    },
    {
      title: "Innovative dApps",
      icon: InnovativeDAppsIcon,
      background: InnovativeDAppsBg,
      description: "We push the boundaries of DeFi by making the impossible a reality. If you have thought of something useful in DeFi that doesn't exist yet, it's probably already in the works at Switcheo Labs.",
      products: [{
        icon: <DemexIcon />,
        name: "Demex",
        url: Paths.demex,
      }, {
        icon: <ZilswapIcon />,
        name: "ZilSwap",
        url: Paths.zilswap,
      }],
    },
    {
      title: "White Spaces",
      icon: WhiteSpacesIcon,
      background: WhiteSpacesBg,
      description: "We are unafraid to dive headfirst into new realms, do the unexpected and lead the charge to uncover new ground and new spaces. We don't believe in competition, because we create new demand.",
      products: [{
        icon: <TBMIcon />,
        name: "The Bear Market",
        url: Paths.tbm,
      }, {
        icon: <ZolarIcon />,
        name: "Zolar",
        url: Paths.zolar,
      }],
    },
  ];

  return (
    <Box>
      <Hidden smDown>
        <DesktopAreas areas={areas} />
      </Hidden>
      <Hidden mdUp>
        <MobileAreas areas={areas} />
      </Hidden>
    </Box>
  );
};

export default InnovationAreas;
