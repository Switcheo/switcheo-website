import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Box, Grid, Hidden } from "@material-ui/core";
import { Paths, FEATURES, minBlockHeight } from "../../../../contants";
import { HomeFeatureColumn } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: minBlockHeight,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      minHeight: 0,
    }
  },
  wrapper: {
    flex: 1,
    margin: theme.spacing(0, -1.5),
    width: `calc(100% + ${theme.spacing(3)}px)`,
  },
}));

const Features: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Key features</ContentTitle>
      <Box className={classes.wrapper}>
        <Grid container>
          {FEATURES.slice(0, 4).map((feature, index) => (
            <Hidden key={index} smDown={index >= 2}>
              <Grid item md={3} xs={6}>
                <HomeFeatureColumn feature={feature} index={index + 1} key={index} />
              </Grid>
            </Hidden>
          ))}
        </Grid>
      </Box>
      <CTAButton href={Paths.features}>Find out more</CTAButton>
    </ContentSection>
  );
};

export default Features;