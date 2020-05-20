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
}));

const Story: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle secondary>Our story</ContentTitle>
      <Box flex={1} />
      <CTAButton secondary href={Paths.story}>Learn more</CTAButton>
    </ContentSection>
  );
};

export default Story;