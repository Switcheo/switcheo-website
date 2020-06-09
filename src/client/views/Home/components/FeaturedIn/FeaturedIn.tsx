import { Box, Button, Typography, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, SwitcheoLogo } from "../../../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/types";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 3, 6),
    },
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
  button: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
    padding: 0,
    borderRadius: 0,
    color: theme.palette.secondary.main,
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: 'none',
    "&:hover, &:focus": {
      '& $txtLink': {
        color: theme.palette.secondary.dark,
      },
      "& $switcheoIcon": {
        color: theme.palette.secondary.dark,
        transform: "rotate(0)",
      },
    }
  },
  txtLink: {
    color: theme.palette.secondary.main,
  },
  switcheoIcon: {
    height: 18,
    width: 18,
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("md")]: {
      height: 12,
      width: 12,
    },
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
}));

const FeaturedIn: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const featuredInData = useSelector((store: RootState) => store.Content.featuredIn);
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle secondary>As featured on</ContentTitle>
      <Box className={classes.wrapper}>
        <Grid container>
          {featuredInData.map((item, index) => (
            <Grid className={classes.item} key={index} item xs={12}>
              <Divider className={classes.divider} />

              <Button className={cls(classes.button)} href={item.link} target="_blank">
                <Typography color="primary" className={classes.txtLink} variant="body1">{item.title}</Typography>
                <SwitcheoLogo className={classes.switcheoIcon} />
              </Button>
              {/* <Typography className={classes.txtLink} variant="body1" component="a" href={item.link} target="_blank">{item.title}</Typography> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContentSection>
  );
};

export default FeaturedIn;