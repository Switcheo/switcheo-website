import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  description: {
    maxWidth: 600,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 480,
    },
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
      <ContentTitle>Switcheo referral program</ContentTitle>
      <Typography variant="body1" color="primary" className={classes.description}>
        Invite your friends and earn 50% of their trading fees. Win from a pool of $40,000 Aqui te pa comnimus enimolum quidell uptatur sapellesti tem eos magni ipis molum eum am veris quostioris volum comnistest, volore dolupta spitas utatem qui occatem ipsa asperspita ariatusam laborec aeptass imperspit perit am enimilignim eictus.
      </Typography>
      <Box flex={1} />
      <CTAButton>Invite friends</CTAButton>
    </ContentSection>
  );
};

export default Referral;