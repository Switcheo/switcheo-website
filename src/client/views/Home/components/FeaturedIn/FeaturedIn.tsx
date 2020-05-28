import { Box, Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle } from "../../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  wrapper: {
    margin: theme.spacing(0, -1.5),
    width: `calc(100% + ${theme.spacing(3)}px)`,
  },
  item: {
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(3),
  },
  divider: {
    borderTop: `1px solid ${theme.palette.secondary.main}`,
  },
  txtLink: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

const FeaturedIn: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const featuredInData = useSelector((store: RootState) => store.Content.featuredIn);
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle secondary>As featured in</ContentTitle>
      <Box className={classes.wrapper}>
        <Grid container>
          {featuredInData.map((item, index) => (
            <Grid className={classes.item} key={index} item xs={12} sm={6}>
              <Divider className={classes.divider} />
              <Typography className={classes.txtLink} variant="body1" component="a" href={item.link} target="_blank">{item.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContentSection>
  );
};

export default FeaturedIn;