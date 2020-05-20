import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, SwitcheoLogo, CTAButton } from "../../../../components";
import { Paths } from "../../../../contants";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  ctaIcon: {
    marginLeft: theme.spacing(8),
  },
}));

const Press: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Press</ContentTitle>
      <Box flex={1} />
      <CTAButton href={Paths.press}>Read more</CTAButton>
    </ContentSection>
  );
};

export default Press;