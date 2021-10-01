import { Box, Collapse, Drawer, MenuItem, MenuList, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import CaretDown from "src/assets/CaretDown.svg";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import CloseIcon from "src/assets/CloseIcon.svg";
import { HeaderTabContent } from "src/utils/types";
import clsx from "clsx";
import { AnchorLink } from "src/components/Common";

interface Props {
  tabs: HeaderTabContent[]
  openMenu: boolean
  setOpenMenu: (openMenu: boolean) => void
}

const MobileMenu: React.FC<Props> = (props: Props) => {
  const { tabs, openMenu, setOpenMenu } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(-1);

  const onSelectTab = (index: number) => {
    if (index == selectIndex) {
      setSelectIndex(-1);
    } else {
      setSelectIndex(index);
    }
  };

  const closeMenu = () => {
    setSelectIndex(-1);
    setOpenMenu(false);
  };

  return ( 
    <Drawer
      anchor="top"
      open={openMenu}
      classes={{
        paper: classes.drawer,
      }}
    >
      <Box className={classes.mobileHeader}>
        <AnchorLink href="/">
          <Box onClick={closeMenu}>
            <SwitcheoBrand className={classes.mobileBrand} />
          </Box>
        </AnchorLink>
        <Box onClick={closeMenu} className={classes.closeIcon}>
          <CloseIcon className={classes.closeIcon}/>
        </Box>
      </Box>
      <MenuList>
        {tabs.map((tab, index) => (
          <Box key={index} className={classes.list}>
            {tab.links ? (
              <>
                <MenuItem
                  className={clsx(classes.section, { [classes.selected]: selectIndex === index })}
                  classes={{
                    root: classes.noPadding,
                  }}
                  onClick={() => onSelectTab(index)}
                >
                  {tab.tabTitle}
                  <CaretDown className={clsx(classes.caret, { [classes.rotate]: selectIndex === index })} />
                </MenuItem>
                <Collapse in={selectIndex === index} timeout="auto" unmountOnExit>
                  <MenuList 
                    classes={{
                      root: classes.noPadding,
                    }}
                  >
                    {tab.links.map((link) => (
                      <AnchorLink key={link.title} href={link.url}>
                        <MenuItem
                          className={classes.link}
                          classes={{
                            root: classes.noPadding,
                          }}
                          onClick={closeMenu}
                        >
                          {link.title}
                        </MenuItem>
                      </AnchorLink>
                    ))}
                  </MenuList>
                </Collapse>
              </>
            ) : (
              <AnchorLink href={tab.url ?? "/"}>
                <MenuItem
                  className={clsx(classes.section, { [classes.selected]: selectIndex === index })}
                  classes={{
                    root: classes.noPadding,
                  }}
                  onClick={closeMenu}
                >
                  {tab.tabTitle}
                </MenuItem>
              </AnchorLink>
            )}
          </Box>
        ))}
      </MenuList>
    </Drawer>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: "100%",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(7, 8),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(3, 4),
    },
  },
  mobileHeader: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(0),
    },
  },
  mobileBrand: {
    "& path": {
      fill: "#FFF",
    },
    width: "14.375rem",
    height: "2.125rem",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      width: "6rem",
      height: "0.875rem",
      marginTop: theme.spacing(0.25),
      marginLeft: 0,
    },
  },
  closeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
    width: "2.375rem",
    height: "2.375rem",
    [theme.breakpoints.only("xs")]: {
      width: "0.875rem",
      height: "0.875rem",
    },
  },
  noPadding: {
    padding: 0,
    minHeight: 0,
  },
  list: {
    color: theme.palette.background.paper,
  },
  section: {
    color: theme.palette.background.paper,
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.75rem",
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(0.5),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem",
      lineHeight: "1.125rem",
      marinTop: 0,
      marginLeft: 0,
    },
  },
  caret: {
    "& path": {
      fill: "#FFF",
    },
    width: "2rem",
    [theme.breakpoints.only("xs")]: {
      width: "1.25rem",
      height: "0.75rem",
    },
  },
  link: {
    fontFamily: "Roobert",
    fontSize: "1.5625rem",
    color: theme.palette.common.white,
    margin: theme.spacing(0.5, 2),
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
      margin: theme.spacing(0.5, 0),
    },
  },
  selected: {
    color: theme.palette.secondary.main,
  },
  rotate: {
    "& path": {
      fill: "#E2FCA4",
    },
    transform: "rotate(180deg)",
  },
}));

export default MobileMenu;
