import { Box, Hidden } from "@material-ui/core";
import React from "react";
import { DecentralizedInfrastructuresBg, DecentralizedInfrastructuresIcon, DemexIcon, InnovativeDAppsBg, InnovativeDAppsIcon, TBMIcon, WhiteSpacesBg, WhiteSpacesIcon, ZilswapIcon, ZolarIcon } from "src/assets/innovation";
import { Paths } from "src/utils/paths";
import { InnovationAreaContent } from "src/utils/types";
import { DesktopAreas, MobileAreas } from "./components";

const InnovationAreas: React.FC = () => {

  const areas: InnovationAreaContent[] = [
    {
      title: "Decentralized Infrastructures",
      icon: DecentralizedInfrastructuresIcon,
      background: DecentralizedInfrastructuresBg,
      description: "We lay the groundwork for decentralized, censorship-resistant ecosystems to thrive on. We incubate networks and partnerships that empower the new movers and shakers of the future.",
      products: [{
        icon: <DemexIcon />,
        name: "Demex Chain",
        url: Paths.demex,
      }],
    },
    {
      title: "Innovative dApps",
      icon: InnovativeDAppsIcon,
      background: InnovativeDAppsBg,
      description: "We push the boundaries of DeFi by making the impossible a reality. If you have thought of something useful in DeFi that doesn't exist yet, it's probably already in the works at Switcheo Labs.",
      products: [{
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
