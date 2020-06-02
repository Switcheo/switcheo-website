import { Typography, Hidden, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton, ImageCell } from "../../../../components";
import urlImageCulture from "../../assets/culture-square.png";
import { Paths } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  description: {
    maxWidth: 480,
    marginRight: "auto",
    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: 600,
    // },
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
          At Switcheo, we start small, think big, and learn fast.
          We strive to create a diverse workspace that is
          encouraging, positive, and inclusive. We are a team of
          agile, bold, and innovative individuals with unshakable
          values. Our flexibility and diversity creates a culture
          where people share knowledge and ideas freely and bring 
          out the best in each other.
        </Typography>
        <Hidden smDown>
          <Box flex={1} />
          <CTAButton secondary href={Paths.culture}>Join us</CTAButton>
        </Hidden>
      </ContentSection>
      <Hidden mdUp>
        <Box className={classes.imageContainer} style={{ backgroundImage: `url(${urlImageCulture})` }}>
          <Box className={classes.volume} />
          <CTAButton className={classes.floatButton} secondary href={Paths.culture}>Join us</CTAButton>
        </Box>
      </Hidden>
    </>
  );
};

export default Culture;