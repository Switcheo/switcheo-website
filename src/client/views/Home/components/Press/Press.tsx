import { Box, Grid, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Paths } from "../../../../constants";
import { RootState } from "../../../../store/types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  wrapper: {
    margin: theme.spacing(0, -1.5),
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% + ${theme.spacing(3)}px)`,
    },
  },
  ctaIcon: {
    marginLeft: theme.spacing(8),
  },
  txtType: {
    fontWeight: "bold",
    margin: theme.spacing(1, 0, 3),
  },
  txtTitle: {
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  item: {
    color: theme.palette.primary.main,
    minHeight: 116,
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(7),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Press: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const pressData = useSelector((store: RootState) => store.Content.press);

  const trimLength = (text?: string, length = 70): any => {
    if (typeof text !== "string") return text;
    return text.length > length ? text.slice(0, length) + "…" : text;
  };

  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Press</ContentTitle>
      <Box className={classes.wrapper}>
        <Grid container>
          {pressData.slice(0, 6).map((item, index) => (
            <Grid className={classes.item} key={index} item xs={12} sm={6}>
              <Divider className={classes.divider} />
              <Typography className={classes.txtType} variant="body1" color="primary">{item.type}</Typography>
              <Typography className={classes.txtTitle} component="a" href={item.link} target="_blank" variant="body1" color="primary">
                {trimLength(item.title)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
      <CTAButton href={Paths.press}>Read more</CTAButton>
    </ContentSection>
  );
};

export default Press;