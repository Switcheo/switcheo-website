import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, SwitcheoLogo, TwinSection, ImageCell } from "../../components";
import { Features, Hero, Products, Story, Press, Culture, Referral, Blog, FeaturedIn, Support } from "./components";

import urlImageCulture from "./assets/culture-square.png";
import urlImageHero from "./assets/hero-square.png";
import urlImagePress from "./assets/press-square.png";
import urlImageReferral from "./assets/referral-square.png";
import urlImageSupport from "./assets/support-square.png";

const useStyles = makeStyles(theme => ({
  root: {
  },
  switcheoIcon: {
    height: "100%",
    width: "100%",
    color: "#DEDEDE",
    flex: 1,
    flexBasis: "50%",
    margin: theme.spacing(0, 1.5, 1.5),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Home: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <TwinSection>
        <ImageCell src={urlImageHero} />
        <Hero />
      </TwinSection>

      <TwinSection>
        <Features id="features" />
      </TwinSection>

      <TwinSection>
        <Products />
        <SwitcheoLogo className={classes.switcheoIcon} />
      </TwinSection>

      <TwinSection>
        <Story id="story" />
      </TwinSection>

      <TwinSection hide="mdUp">
        <Press id="press" />
      </TwinSection>

      <TwinSection>
        <ImageCell src={urlImageCulture} hide="smDown" />
        <Culture id="culture" />
      </TwinSection>

      <TwinSection hide="smDown">
        <Press id="press" />
        <ImageCell src={urlImagePress} />
      </TwinSection>

      <TwinSection mobileReverse>
        <ImageCell src={urlImageReferral} />
        <Referral />
      </TwinSection>

      <TwinSection>
        <FeaturedIn id="featured" />
        <Blog id="blog" />
      </TwinSection>

      <TwinSection>
        <Support id="support" />
        <ImageCell src={urlImageSupport} />
      </TwinSection>
    </Box>
  );
};

export default Home;