import { Box, Container, Hidden, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React, { useState } from "react";
import CaretDown from "src/assets/CaretDown.svg";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import MenuIcon from "src/assets/MenuIcon.svg";
import { Demex, Carbon, SwitcheoDevFund, Zilswap } from "src/assets/header";
import clsx from "clsx";
import { HeaderTab, HeaderTabContent } from "src/utils/types";
import { HeaderMenu } from "./components";

const Header: React.FC = () => {
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(-1);

  const onSelectTab = (index: HeaderTab) => {
    if (index == selectIndex) {
      setSelectIndex(-1);
    } else {
      setSelectIndex(index);
    }
  };

  const headerTabs: HeaderTabContent[] = [
    {
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Demex",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
        },
        {
          title: "Carbon",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
        },
        {
          title: "Zilswap",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
        },
        {
          title: "Switcheo Development Fund",
          description: "Funding new innovations building the future of blockchain applications",
          icon: <SwitcheoDevFund />,
        },
      ],
    },
    {
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Demex",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
        },
        {
          title: "Carbon",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
        },
        {
          title: "Zilswap",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
        },
        {
          title: "Switcheo Development Fund",
          description: "Funding new innovations building the future of blockchain applications",
          icon: <SwitcheoDevFund />,
        },
      ],
    },
    {
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Demex",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
        },
        {
          title: "Carbon",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
        },
        {
          title: "Zilswap",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
        },
        {
          title: "Switcheo Development Fund",
          description: "Funding new innovations building the future of blockchain applications",
          icon: <SwitcheoDevFund />,
        },
      ],
    },
    {
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Demex",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
        },
        {
          title: "Carbon",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
        },
        {
          title: "Zilswap",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
        },
        {
          title: "Switcheo Development Fund",
          description: "Funding new innovations building the future of blockchain applications",
          icon: <SwitcheoDevFund />,
        },
      ],
    },
  ];

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Link href="/" passHref>
          <SwitcheoBrand className={classes.brand} />
        </Link>
        <Hidden smDown>
          <Box className={classes.navTabs}>
            <Box 
              onClick={() => onSelectTab(HeaderTab.Ecosystem)}
              className={clsx(classes.tab, { [classes.selected]: selectIndex === HeaderTab.Ecosystem })}
            >
              <Typography variant="body1" color="textSecondary">
                Ecosystem
              </Typography>
              <Box className={classes.caret}>
                <CaretDown />
              </Box>
            </Box>
            <Box 
              onClick={() => onSelectTab(HeaderTab.Company)}
              className={clsx(classes.tab, { [classes.selected]: selectIndex === HeaderTab.Company })}
            >
              <Typography variant="body1" color="textSecondary">
                Company
              </Typography>
              <Box className={classes.caret}>
                <CaretDown />
              </Box>
            </Box>
            <Box 
              onClick={() => onSelectTab(HeaderTab.Newsroom)}
              className={clsx(classes.tab, { [classes.selected]: selectIndex === HeaderTab.Newsroom })}
            >
              <Typography variant="body1" color="textSecondary">
                Newsroom
              </Typography>
              <Box className={classes.caret}>
                <CaretDown />
              </Box>
            </Box>
            <Box 
              onClick={() => onSelectTab(HeaderTab.Developers)}
              className={clsx(classes.tab, { [classes.selected]: selectIndex === HeaderTab.Developers })}
            >
              <Typography variant="body1" color="textSecondary">
                Developers
              </Typography>
              <Box className={classes.caret}>
                <CaretDown />
              </Box>
            </Box>
            <Box className={classes.tab}>
              <Typography variant="body1" color="textSecondary">
                Contact
              </Typography>
            </Box>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <MenuIcon />
        </Hidden>
      </Container>
      <Hidden smDown>
        {selectIndex !== -1 && (
          <HeaderMenu selectedTab={headerTabs[selectIndex]} />
        )}
      </Hidden>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    position: "sticky",
    top: 0,
    width: "100%",
    zIndex: 100,
  },
  header: {
    padding: theme.spacing(7, 15, 1, 5),
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(7, 7, 0, 7),
    },
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(3, 10),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3, 5),
    },
    display: "flex",
    justifyContent: "space-between",
  },
  brand: {
    marginTop: theme.spacing(1.5),
    cursor: "pointer",
  },
  navTabs: {
    display: "flex",
    justifyContent: "space-between",
  },
  tab: {
    display: "flex",
    borderBottom: "4px solid transparent",
    cursor: "pointer",
    padding: theme.spacing(1, 2, 4, 2),
  },
  selected: {
    borderBottom: "4px solid #B9D674",
  },
  caret: {
    margin: theme.spacing(0.5),
  },
}));

export default Header;
