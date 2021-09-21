import { Backdrop, Box, Container, Hidden, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React, { useState } from "react";
import CaretDown from "src/assets/CaretDown.svg";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import MenuIcon from "src/assets/MenuIcon.svg";
import { Demex, Carbon, SwitcheoDevFund, Zilswap } from "src/assets/header";
import clsx from "clsx";
import { HeaderTabContent } from "src/utils/types";
import { HeaderMenu, MobileMenu } from "./components";
import { Paths } from "src/utils/paths";

const Header: React.FC = () => {
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(-1);
  const [openMenu, setOpenMenu] = useState(false);

  const onSelectTab = (index: number) => {
    const prevIndex = selectIndex;
    setSelectIndex(-1);
    if (index !== prevIndex) {
      setTimeout(() => setSelectIndex(index), 100);
    }
  };

  const headerTabs: HeaderTabContent[] = [
    {
      tabTitle: "Ecosystem",
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Demex",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
          url: Paths.demex,
        },
        {
          title: "Carbon",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
          url: "/",
        },
        {
          title: "Zilswap",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
          url: Paths.zilswap,
        },
        {
          title: "Switcheo Development Fund",
          description: "Funding new innovations building the future of blockchain applications",
          icon: <SwitcheoDevFund />,
          url: "/",
        },
      ],
    },
    {
      tabTitle: "Company",
      url: "/careers",
      sectionTitle: "",
      button: "",
      links: [],
    },
    {
      tabTitle: "Newsroom",
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Blog",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
          url: "/",
        },
        {
          title: "In The Press",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
          url: "/",
        },
        {
          title: "Brand Assets",
          description: "Zilliqa-based dynamic currency swap and liquidity pool solutions",
          icon: <Zilswap />,
          url: "/",
        },
      ],
    },
    {
      tabTitle: "Developers",
      sectionTitle: "SwitcheoLabs Ecosystem Suite Of Innovations",
      button: "This button is fake",
      links: [
        {
          title: "Documentation",
          description: "Decentralized exchange that allows cross-chain trading and options",
          icon: <Demex />,
          url: "/",
        },
        {
          title: "Dev Fund",
          description: "Derivatives protocol that powers DeFi applications and smart contracts",
          icon: <Carbon />,
          url: "/",
        },
      ],
    },
    {
      tabTitle: "Contact",
      url: "/",
      sectionTitle: "",
      button: "",
      links: [],
    },
  ];

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <Link href="/" passHref>
          <Box onClick={() => setSelectIndex(-1)}>
            <SwitcheoBrand className={classes.brand} />
          </Box>
        </Link>
        <Hidden smDown>
          <Box className={classes.navTabs}>
            {headerTabs.map((tab, index) => tab.url ? (
              <Link key={index} href={tab.url} passHref>
                <Box className={classes.tab} onClick={() => setSelectIndex(-1)}>
                  <Typography variant="body1" color="textSecondary">
                    {tab.tabTitle}
                  </Typography>
                </Box>
              </Link>
            ) : (
              <Box 
                key={index}
                onClick={() => onSelectTab(index)}
                className={clsx(classes.tab, { [classes.selected]: selectIndex === index })}
              >
                <Typography variant="body1" color="textSecondary">
                  {tab.tabTitle}
                </Typography>
                <CaretDown className={classes.caret} />
              </Box>
            ))}
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box onClick={() => setOpenMenu(true)} className={classes.menuIcon}>
            <MenuIcon />
          </Box>
        </Hidden>
      </Container>
      <Hidden smDown>
        <HeaderMenu selectedTab={headerTabs[selectIndex]} />
      </Hidden>

      <Hidden mdUp>
        <MobileMenu
          tabs={headerTabs}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      </Hidden>
      <Backdrop invisible open={headerTabs[selectIndex]?.links.length > 0} onClick={() => setSelectIndex(-1)} />
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
    padding: theme.spacing(7, 15, 1),
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(7, 4, 0),
    },
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(7, 8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(3),
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  brand: {
    marginTop: theme.spacing(2),
    cursor: "pointer",
    width: "10.375rem",
    [theme.breakpoints.only("sm")]: {
      width: "14.375rem",
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.only("xs")]: {
      width: "6rem",
      marginTop: theme.spacing(0.75),
      marginLeft: theme.spacing(2),
    },
  },
  navTabs: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  tab: {
    display: "flex",
    borderBottom: "4px solid transparent",
    cursor: "pointer",
    padding: theme.spacing(1, 2, 4, 2),
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(1, 1, 4, 1),
    },
    alignItems: "center",
  },
  selected: {
    borderBottom: "4px solid #B9D674",
  },
  caret: {
    margin: theme.spacing(1, 0.5, 0.5, 0.5),
    width: "1.25rem",
    height: "0.75rem",
    "& path": {
      fill: theme.palette.text.secondary,
    },
  },
  menuIcon: {
    cursor: "pointer",
    width: "3.0625rem",
    [theme.breakpoints.only("xs")]: {
      width: "1.625rem",
    },
  },
}));

export default Header;
