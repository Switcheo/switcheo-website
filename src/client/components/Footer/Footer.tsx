import { Box, Button, Typography, TextField, Grid, Checkbox, FormControlLabel, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import Section from "../Section";

import SVGComponent from "../SVGComponent";
import ContentSection from "../ContentSection";
import SwitcheoBrand from "../SwitcheoBrand";
import { FooterTitle, FooterLink, SubscribeBox } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 84px - 50px)",
    margin: theme.spacing(0, 3, 3),
    backgroundColor: "#DEDEDE",
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
      margin: 0,
    },
  },
  brand: {
    width: 158,
    height: 23,
    marginTop: theme.spacing(3),
    color: theme.palette.primary.main,
  },
  container: {
    flex: 1,
  },
  cell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  links: {
    paddingRight: theme.spacing(3),
  },
}));
const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <Grid container className={classes.container}>
        <Hidden mdUp>
          <Grid item className={classes.cell} xs={12}>
            <SubscribeBox />
          </Grid>
        </Hidden>
        <Grid item className={cls(classes.cell, classes.links)} xl={2} md={3} sm={6}>
          <FooterTitle>Sitemap</FooterTitle>

          <FooterLink>Home</FooterLink>
          <FooterLink>Start trading</FooterLink>
          <FooterLink>Key features</FooterLink>
          <FooterLink>Our story</FooterLink>
          <FooterLink>Our culture</FooterLink>
          <FooterLink>Press</FooterLink>
          <FooterLink>As featured in</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Support</FooterLink>
        </Grid>
        <Grid item className={cls(classes.cell, classes.links)} xl={2} md={3} sm={6}>
          <FooterTitle>Resources</FooterTitle>

          <FooterLink>Security</FooterLink>
          <FooterLink>Whitepapers</FooterLink>
          <FooterLink>API docs</FooterLink>
          <FooterLink>Apply to list</FooterLink>
          <FooterLink>Media kit</FooterLink>
          <FooterLink>Terms of policy</FooterLink>
          <FooterLink>Privacy policy</FooterLink>
          <FooterLink>Listing policy</FooterLink>
        </Grid>
        <Hidden smDown>
          <Grid item xl={4} md={1} />
          <Grid item className={classes.cell} xl={4} md={5}>
            <SubscribeBox />
          </Grid>
        </Hidden>
      </Grid>
      <Box flex={1} />
      <SwitcheoBrand className={classes.brand} />
    </ContentSection>
  );
};

export default Footer;