import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.palette.primary.main,
  },
  description: {
    maxWidth: 570,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 440,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
  ctaIcon: {
    marginLeft: theme.spacing(8),
  },
}));

const Hero: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle secondary large>Time <br/>well <br/>invested.</ContentTitle>
      <Typography variant="body1" color="secondary" className={classes.description}>
        Trading without limits for lives without limits.
        We bring you a platform so speedy, so safe
        and so user-friendly for anyone to trade
        assets freely across chains.
      </Typography>
      <Box flex={1} />
      <CTAButton secondary>Start trading</CTAButton>
    </ContentSection>
  );
};

export default Hero;