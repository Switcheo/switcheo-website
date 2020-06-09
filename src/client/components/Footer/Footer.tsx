import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { minBlockHeight, Paths } from "../../constants";
import ContentSection from "../ContentSection";
import SwitcheoBrand from "../SwitcheoBrand";
import { FooterLink, FooterTitle, SocialLinkGroup, SubscribeBox } from "./components";



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#DEDEDE",
    paddingBottom: 1,
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  content: {
    margin: theme.spacing(3, 0),
    minHeight: minBlockHeight,
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
      margin: 0,
    },
  },
  brand: {
    width: 158,
    height: 23,
    color: theme.palette.primary.main,
  },
  gridContainer: {
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
  bottom: {
    marginTop: theme.spacing(3),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));
const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Container className={classes.container} maxWidth="lg">
        <ContentSection className={classes.content}>
          <Grid container className={classes.gridContainer}>
            <Hidden mdUp>
              <Grid item className={classes.cell} xs={12}>
                <SubscribeBox />
              </Grid>
            </Hidden>
            <Grid item className={cls(classes.cell, classes.links)} md={3} xs={6}>
              <FooterTitle>Sitemap</FooterTitle>

              <FooterLink href={Paths.exchange} target="_blank">Exchange</FooterLink>
              <FooterLink href={Paths.home}>Home</FooterLink>
              <FooterLink href={Paths.story}>Our Story</FooterLink>
              <FooterLink href={Paths.features}>Our Ecosystem</FooterLink>
              <FooterLink href={Paths.press}>Press</FooterLink>
              <FooterLink href={Paths.culture}>Careers</FooterLink>
              <FooterLink href={Paths.blog} target="_blank">Blog</FooterLink>
              <FooterLink href={Paths.support} target="_blank">Support</FooterLink>
            </Grid>
            <Grid item className={cls(classes.cell, classes.links)} md={3} xs={6}>
              <FooterTitle>Resources</FooterTitle>

              <FooterLink href={Paths.api_docs} target="_blank">Developer</FooterLink>
              <FooterLink href={Paths.media_kit} target="_blank">Media Kit</FooterLink>
              <FooterLink href={Paths.terms_of_use}>Terms of Use</FooterLink>
              <FooterLink href={Paths.privacy_policy}>Privacy Policy</FooterLink>
              <FooterLink href={Paths.security_policy}>Security Policy</FooterLink>
              <FooterLink href={Paths.listing_policy}>Listing Policy</FooterLink>
              <FooterLink href={Paths.apply_to_list} target="_blank">Apply for Listing</FooterLink>
            </Grid>
            <Hidden smDown>
              <Grid item xs={1} />
              <Grid item className={classes.cell} xs={5}>
                <SubscribeBox />
              </Grid>
            </Hidden>
          </Grid>
          <Box flex={1} />
          <Box className={classes.bottom}>
            <SocialLinkGroup />
            <SwitcheoBrand className={classes.brand} />
          </Box>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default Footer;