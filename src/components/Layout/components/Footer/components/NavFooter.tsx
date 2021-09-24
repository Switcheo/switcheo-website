import { Box, Grid, Hidden, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import SwitcheoBrand from "src/assets/SwitcheoBrand.svg";
import { Paths } from "src/utils/paths";

const NavFooter: React.FC = () => {
  const classes = useStyles();

  const navLinks = [
    {
      section: "Products",
      links: [
        {
          title: "Demex",
          url: Paths.demex,
        },
        {
          title: "Zilswap",
          url: Paths.zilswap,
        },
        {
          title: "Carbon",
          url: Paths.carbon,
        },
      ],
    },
    {
      section: "Developers",
      links: [
        {
          title: "Switcheo Docs",
          url: "/",
        },
        {
          title: "Demex Docs",
          url: Paths.demexDocs,
        },
        {
          title: "Zilswap Docs",
          url: Paths.zilswapDocs,
        },
        {
          title: "Carbon Docs",
          url: "/",
        },
        {
          title: "Media Guide",
          url: "/",
        },
      ],
    },
    {
      section: "Learn",
      links: [
        {
          title: "Guides",
          url: "/",
        },
        {
          title: "Terminologies",
          url: "/",
        },
      ],
    },
    {
      section: "Company",
      links: [
        {
          title: "About",
          url: "/",
        },
        {
          title: "Our Ecosystem",
          url: "/",
        },
        {
          title: "Partners",
          url: "/",
        },
        {
          title: "Enterprise",
          url: "/",
        },
      ],
    },
    {
      section: "Support",
      links: [
        {
          title: "Contact",
          url: "/",
        },
        {
          title: "Cookie Policy",
          url: "/",
        },
        {
          title: "Legal & Privacy",
          url: "/",
        },
        {
          title: "Sitemap",
          url: "/",
        },
      ],
    },
  ];

  return (
    <Box className={classes.root}>
      <Hidden smDown>
        <Box marginLeft={5} marginTop={1} width="60%">
          <Link href="/" passHref>
            <Box>
              <SwitcheoBrand className={classes.img} />
            </Box>
          </Link>
        </Box>
      </Hidden>
      <Grid container spacing={2} justifyContent="flex-end">
        {navLinks.map((section) => (
          <Grid key={section.section} item xs={6} md={4}>
            <Box className={classes.sectionTitle}>
              {section.section}
            </Box>
            {section.links.map((link) => (
              <Link key={link.title} href={link.url} passHref>
                <Box className={classes.navLink}>
                  {link.title}
                </Box>
              </Link>
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
    padding: theme.spacing(24, 0, 10, 0),
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
    "&:hover": {
      cursor: "pointer",
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
    "&:hover": {
      cursor: "pointer",
    },
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
