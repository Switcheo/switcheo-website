import { Backdrop, Box, Container, Hidden, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { useState } from "react";
import CaretDown from "src/assets/CaretDown.svg";
import MenuIcon from "src/assets/MenuIcon.svg";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import { Blog, Carbon, Demex, Github, TBM, Zilswap, Zolar } from "src/assets/header";
import { AnchorLink } from "src/components/Common";
import { Paths } from "src/utils/paths";
import { HeaderTabContent } from "src/utils/types";
import { HeaderMenu, MobileMenu } from "./components";

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
      tabTitle: "Showcase",
      sectionTitle: "Innovations & Ecosystems by Switcheo Labs",
      links: [
        {
          title: "Demex Chain",
          description: "A scalable, cross-chain derivatives protocol that that provides DeFi building blocks",
          icon: <Demex />,
          url: Paths.demex,
        },
        {
          title: "ZilSwap",
          description: "The Home of Zilliqa, powering all of Zilliqa's core DeFi, NFT and metaverse infrastructure",
          icon: <Zilswap />,
          url: Paths.zilswap,
        },
        {
          title: "The Bear Market",
          description: "The inaugural NFT collection on ZilSwap's NFT Marketplace, ARKY",
          icon: <TBM />,
          url: Paths.tbm,
        },
        {
          title: "Our Github",
          description: "Access repositories and codebases that inspire open collaboration",
          icon: <Github />,
          url: Paths.github,
        },
      ],
    },
    // {
    //   tabTitle: "Ecosystem",
    //   sectionTitle: "Fostering Open & Collaborative Development",
    //   links: [
    //     {
    //       title: "Our Github",
    //       description: "Access repositories and codebases that inspire open collaboration",
    //       icon: <Github />,
    //       url: Paths.github,
    //     },
    //   ],
    // },
    {
      tabTitle: "Newsroom",
      sectionTitle: "Thoughts, Ideas & News From Us",
      links: [
        {
          title: "Blog",
          description: "Explore cutting-edge insights and news from Switcheo Labs & Switcheo Research",
          icon: <Blog />,
          url: Paths.blog,
        },
      ],
    },
    {
      tabTitle: "Join Us",
      url: Paths.careers,
    },
  ];

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg" className={classes.header}>
        <AnchorLink href={Paths.home}>
          <Box onClick={() => setSelectIndex(-1)}>
            <SwitcheoBrand className={classes.brand} />
          </Box>
        </AnchorLink>
        <Hidden smDown>
          <Box className={classes.navTabs}>
            {headerTabs.map((tab, index) => tab.url ? (
              <AnchorLink key={index} href={tab.url}>
                <Box className={classes.tab} onClick={() => setSelectIndex(-1)}>
                  <Typography variant="body1" color="textSecondary">
                    {tab.tabTitle}
                  </Typography>
                </Box>
              </AnchorLink>
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
      <Backdrop invisible open={!!headerTabs[selectIndex]?.links} onClick={() => setSelectIndex(-1)} />
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
      padding: theme.spacing(7, 8, 1),
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
    "&:hover": {
      cursor: "pointer",
    },
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
    "&:hover": {
      cursor: "pointer",
    },
    width: "3.0625rem",
    [theme.breakpoints.only("xs")]: {
      width: "1.625rem",
    },
  },
}));

export default Header;
