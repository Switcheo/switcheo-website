import { Box, Grid, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import { AnchorLink } from "src/components/Common";
import { Paths } from "src/utils/paths";

const NavFooter: React.FC = () => {
  const classes = useStyles();

  const navLinks = [
    {
      section: "Company",
      links: [
        {
          title: "Careers",
          url: Paths.careers,
        },
        {
          title: "Build With Us",
          url: Paths.contactUs,
        },
        {
          title: "Brand Assets",
          url: Paths.brandAssets,
        },
      ],
    },
    {
      section: "Ecosystems",
      links: [
        {
          title: "Check Our GitHub",
          url: Paths.github,
        },
      ],
    },
    {
      section: "Showcase",
      links: [
        {
          title: "Carbon",
          url: Paths.carbon,
        },
        {
          title: "Demex",
          url: Paths.demex,
        },
        {
          title: "Fluo",
          url: Paths.fluo,
        },
        {
          title: "ZilSwap",
          url: Paths.zilswap,
        },
        {
          title: "Zolar",
          url: Paths.zolar,
        },
      ],
    },
    {
      section: "More Info",
      links: [
        {
          title: "Carbon Guide",
          url: Paths.carbonGuide,
        },
        {
          title: "Demex Guide",
          url: Paths.demexGuide,
        },
        {
          title: "Fluo Docs",
          url: Paths.fluoDocs,
        },
        {
          title: "ZilSwap Guide",
          url: Paths.zilswapGuide,
        },
        {
          title: "Zolar Guide",
          url: Paths.zolarGuide,
        },
      ],
    },
  ];

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box marginLeft={3} marginTop={1} width="60%">
          <AnchorLink href={Paths.home}>
            <Box>
              <SwitcheoBrand className={classes.img} />
            </Box>
          </AnchorLink>
        </Box>
      </Hidden>
      <Grid container spacing={4}>
        {navLinks.map((section) => (
          <Grid key={section.section} item xs={6} md={3}>
            <Box className={classes.sectionTitle}>
              {section.section}
            </Box>
            {section.links.map((link) => (
              <AnchorLink key={link.title} href={link.url}>
                <Box className={classes.navLink}>
                  {link.title}
                </Box>
              </AnchorLink>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(15, 0, 10, 0),
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 0, 10, 10),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5, 0, 10),
    },
  },
  img: {
    "& path": {
      fill: "#FFF",
    },
    width: "10.625rem",
  },
  text: {
    padding: theme.spacing(1),
  },
  products: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  sectionTitle: {
    fontFamily: "Roobert-SemiBold",
    letterSpacing: "-0.04em",
    fontSize: "1.25rem",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  navLink: {
    fontFamily: "Roobert",
    letterSpacing: "-0.01em",
    fontSize: "1.125rem",
    color: "#C9D2D9",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8125rem",
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1rem",
    },
  },
}));

export default NavFooter;
