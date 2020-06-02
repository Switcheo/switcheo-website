import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Box } from "@material-ui/core";
import { Paths } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  bigNumber: {
    textAlign: "center",
    fontSize: "427px",
    lineHeight: "350px",
    [theme.breakpoints.down("md")]: {
      fontSize: "312px",
      lineHeight: "268px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "202px",
      lineHeight: "183px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "120px",
      lineHeight: "115px",
    },
  },
}));

const Story: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle secondary>Our story</ContentTitle>
      <Typography className={classes.bigNumber} color="secondary">34800</Typography>
      <Typography variant="body1" color="secondary">Otatibus eossusam dendictet pratur aborionsendi dolut od quo tes eatios volorrum es dit ut es ulparcienda deloUpta cum erat fugia.</Typography>
      <Box flex={1} />
      <CTAButton secondary href={Paths.story}>Learn more</CTAButton>
    </ContentSection>
  );
};

export default Story;