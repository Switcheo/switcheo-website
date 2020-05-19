import { Typography, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton, ImageCell } from "../../../../components";
import urlImageCulture from "../../assets/culture-square.png";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  description: {
    maxWidth: 600,
    marginRight: "auto",
    [theme.breakpoints.down("lg")]: {
      maxWidth: 480,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  ctaIcon: {
    marginLeft: theme.spacing(8),
  },
  imageContainer: {
    width: "100%",
    backgroundSize: "cover",
    position: "relative",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fafafa",
  },
  volume: {
    paddingTop: "50%",
    width: "100%",
  },
  floatButton: {
    position: "absolute",
    bottom: theme.spacing(3),
    left: theme.spacing(3),
  },
}));

const Culture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <>
      <ContentSection {...rest} className={cls(classes.root, className)}>
        <ContentTitle secondary>Our culture</ContentTitle>
        <Typography variant="body1" color="secondary" className={classes.description}>
          Join the cryptocurrency exchange that’s leaving others in its wake. Trading without limits for lives without limits. Accatem fugiat volorit adis maionsedi solorro rruntur. Mus de volupienis sim estiisci ommoluptate raturior sus.Pa voloriam, cum, int doluptus dolestiam que dolesto riorectem autem a nonsecto tem quaecta et eossi volorit iorupta etiam, exceri ipsapis nes ducias etur.
        </Typography>
        <Hidden smDown>
          <Box flex={1} />
          <CTAButton secondary>Join us</CTAButton>
        </Hidden>
      </ContentSection>
      <Hidden mdUp>
        <Box className={classes.imageContainer} style={{ backgroundImage: `url(${urlImageCulture})` }}>
          <Box className={classes.volume} />
          <CTAButton className={classes.floatButton} secondary>Join us</CTAButton>
        </Box>
      </Hidden>
    </>
  );
};

export default Culture;