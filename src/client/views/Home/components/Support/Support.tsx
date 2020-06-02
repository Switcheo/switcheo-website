import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Paths } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
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

const Support: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Need support?</ContentTitle>
      <Typography variant="body1" color="primary" className={classes.description}>
      We listen to your needs and we are available 24/7. 
      Visit our support center for advice and answers 
      from the Switcheo team.
      </Typography>
      <Box flex={1} />
      <CTAButton white href={Paths.support} target="_blank">Get support</CTAButton>
    </ContentSection>
  );
};

export default Support;