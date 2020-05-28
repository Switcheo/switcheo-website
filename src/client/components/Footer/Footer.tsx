import { Box, Button, Typography, TextField, Grid, Checkbox, FormControlLabel, Hidden, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import Section from "../Section";

import SVGComponent from "../SVGComponent";
import ContentSection from "../ContentSection";
import SwitcheoBrand from "../SwitcheoBrand";
import { FooterTitle, FooterLink, SubscribeBox } from "./components";

import { minBlockHeight, Paths } from "../../contants";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  content: {
    margin: theme.spacing(3, 0),
    backgroundColor: "#DEDEDE",
    minHeight: minBlockHeight,
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
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <ContentSection className={classes.content}>
        <Grid container className={classes.container}>
          <Hidden mdUp>
            <Grid item className={classes.cell} xs={12}>
              <SubscribeBox />
            </Grid>
          </Hidden>
          <Grid item className={cls(classes.cell, classes.links)} xl={2} md={3} xs={6}>
            <FooterTitle>Sitemap</FooterTitle>

            <FooterLink href={Paths.home}>Home</FooterLink>
            <FooterLink href={Paths.exchange} target="_blank">Start trading</FooterLink>
            <FooterLink href={Paths.features}>Key features</FooterLink>
            <FooterLink href={Paths.story}>Our story</FooterLink>
            <FooterLink href={Paths.culture}>Our culture</FooterLink>
            <FooterLink href={Paths.press}>Press</FooterLink>
            <FooterLink href={Paths.featured}>As featured in</FooterLink>
            <FooterLink href={Paths.blog} target="_blank">Blog</FooterLink>
            <FooterLink href={Paths.support} target="_blank">Support</FooterLink>
          </Grid>
          <Grid item className={cls(classes.cell, classes.links)} xl={2} md={3} xs={6}>
            <FooterTitle>Resources</FooterTitle>

            <FooterLink href={Paths.security} target="_blank">Security</FooterLink>
            <FooterLink href={Paths.whitepaper} target="_blank">Whitepapers</FooterLink>
            <FooterLink href={Paths.api_docs} target="_blank">API docs</FooterLink>
            <FooterLink href={Paths.apply_to_list} target="_blank">Apply to list</FooterLink>
            <FooterLink href={Paths.media_kit} target="_blank">Media kit</FooterLink>
            <FooterLink href={Paths.terms_of_use} target="_blank">Terms of policy</FooterLink>
            <FooterLink href={Paths.privacy_policy} target="_blank">Privacy policy</FooterLink>
            <FooterLink href={Paths.listing_policy} target="_blank">Listing policy</FooterLink>
          </Grid>
          <Hidden smDown>
            <Grid item xl={4} xs={1} />
            <Grid item className={classes.cell} xl={4} xs={5}>
              <SubscribeBox />
            </Grid>
          </Hidden>
        </Grid>
        <Box flex={1} />
        <SwitcheoBrand className={classes.brand} />
      </ContentSection>
    </Container>
  );
};

export default Footer;