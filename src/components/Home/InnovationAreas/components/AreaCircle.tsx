import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import React, { useMemo } from "react";
import { CarbonIcon, DecentralizedInfrastructuresBg, DemexIcon, InnovativeDAppsBg, SwitcheoDevFundIcon, WhiteSpacesBg, ZilswapIcon } from "src/assets/innovation";

interface Props {
  selectIndex: number
}

const AreaCircle: React.FC<Props> = (props: Props) => {
  const { selectIndex } = props;
  const classes = useStyles();

  const areas = [
    {
      title: "Decentralized Infrastructures",
      background: DecentralizedInfrastructuresBg,
      description: "We push the boundaries of DeFi by making the impossible a reality. If you have thought of something useful in DeFi that doesn’t exist yet, we are probably already building it.",
      products: [{
        icon: <CarbonIcon />,
        name: "Carbon Protocol",
      }],
    },
    {
      title: "Innovative dApps",
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
      title: "White Spaces",
      background: WhiteSpacesBg,
      description: "We are unafraid to dive headfirst into new realms, do the unexpected and lead the charge to uncover new ground and new spaces. We don’t believe in competition because we create new demand.",
      products: [{
        icon: <SwitcheoDevFundIcon />,
        name: "Switcheo Dev Fund",
      }],
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectedArea = useMemo(() => areas[selectIndex], [selectIndex]);

  return (
    <Box borderRadius="50%" className={classes.root}>
      <Image src={selectedArea.background} alt={selectedArea.title} />
      <Box className={classes.gradient} />
      <Box className={classes.content}>
        <Box marginBottom={4}>
          <Typography variant="subtitle1" color="inherit">
            {selectedArea.description}
          </Typography>
        </Box>
        {selectedArea.products.map((product) => (
          <Box key={product.name} className={classes.product}>
            {product.icon}
            <Box className={classes.productName}>
              {product.name}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& img": {
      borderRadius: "50%",
      zIndex: -100,
    },
    width: "62.5rem",
    height: "62.5rem",
    marginTop: theme.spacing(-105),
    zIndex: 1,
    color: theme.palette.common.white,
    position: "relative",
    left: "48vw",
  },
  gradient: {
    marginTop: theme.spacing(-126),
    borderRadius: "50%",
    width: "62.5rem",
    height: "62.5rem",
    background: "linear-gradient(180deg, #222222 0%, rgba(34, 34, 34, 0) 100%);",
    mixBlendMode: "normal",
  },
  content: {
    zIndex: 100,
    marginTop: theme.spacing(-92),
    marginLeft: theme.spacing(18),
    width: "55%",
  },
  product: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  productName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.3125rem",
    marginLeft: theme.spacing(3),
  },
}));

export default AreaCircle;
