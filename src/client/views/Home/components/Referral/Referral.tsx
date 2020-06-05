import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Paths } from "../../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  description: {
    maxWidth: 480,
    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: 600,
    // },
    [theme.breakpoints.down("md")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
}));

const Referral: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Switcheo Referral Program</ContentTitle>
      <Typography variant="body1" color="primary" className={classes.description}>
      Invite your friends and get handsomely rewarded. 
      Receive 50% in rebates when your friend successfully 
      signs up with your referral. Your friend will also 
      receive a 25% discount on their trading fees for 
      3 months.
      </Typography>
      <Box flex={1} />
      <CTAButton href={Paths.referral} target="_blank">Invite friends</CTAButton>
    </ContentSection>
  );
};

export default Referral;