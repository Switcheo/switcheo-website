import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Paths } from "../../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 3, 6),
    },
  },
  description: {
    maxWidth: 480,
    marginBottom: theme.spacing(1.5),
    // [theme.breakpoints.up("xl")]: {
    //   maxWidth: 600,
    // },
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
      <ContentTitle>Share the love</ContentTitle>
      <Typography variant="body1" color="primary" className={classes.description}>
      Invite your friends and get handsomely rewarded.
      </Typography>
      <Typography variant="body1" color="primary" className={classes.description}>
      Receive 50% in rebates when your friend successfully
      signs up with your referral.
      </Typography>
      <Typography variant="body1" color="primary" className={classes.description}>
      Your friend will also
      receive a 25% discount on their trading fees for
      3 months.
      </Typography>
      <Box flex={1} />
      <CTAButton href={Paths.referral} target="_blank">Invite friends</CTAButton>
    </ContentSection>
  );
};

export default Referral;