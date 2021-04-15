import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Paths } from "../../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 3, 6),
    },
  },
  title: {
    maxWidth: 300,
  },
  description: {
    maxWidth: 440,
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
      <ContentTitle secondary large className={classes.title}>
        We go forward.
      </ContentTitle>
      <Typography variant="body1" color="secondary" className={classes.description}>
        Finance without limits, for lives without limits.
        We bring you groundbreaking platforms that pave the way for a decentralized future. 
        There’s nothing cryptic about crypto on Switcheo. Your time
        spent with us will be a worthwhile investment.
      </Typography>
      <Box flex={1} />
      <CTAButton secondary href={Paths.governance} target="_blank">Build with us</CTAButton>
    </ContentSection>
  );
};

export default Hero;