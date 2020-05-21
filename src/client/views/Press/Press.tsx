import { Box, Container, Divider, Typography, Grid, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { useSelector } from "react-redux";
import { ContentTitle, SwitcheoLogo, DateLabel } from "../../components";
import { RootState } from "../../store/types";

const PRESS = [{
  title: "The journey of a blockchain pioneer",
  type: "Interview",
  date: "7 days ago",
}, {
  title: "The journey of a blockchain pioneer",
  type: "Interview",
  date: "7 days ago",
}, {
  title: "The journey of a blockchain pioneer",
  type: "Interview",
  date: "7 days ago",
}];

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    }
  },
  content: {
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  itemContainer: {
    position: "relative",
    padding: theme.spacing(2, 0, 1),
    display: "flex",
    flexDirection: "row",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginBottom: theme.spacing(6)
    },
  },
  title: {
    color: theme.palette.primary.main,
    flex: 1,
    flexBasis: "50%",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      lineHeight: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(1),
      whiteSpace: "unset",
    },
  },
  type: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    flex: 1,
    flexBasis: "20%",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  date: {
    color: theme.palette.primary.main,
    flex: 1,
    flexBasis: "20%",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
  icon: {
    position: "absolute",
    top: theme.spacing(2),
    right: 0,
    height: theme.spacing(3),
    width: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(2),
      width: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      top: "unset",
      bottom: 0,
      height: theme.spacing(4),
      width: theme.spacing(4),
    },
  },
}));

const Press: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  // @ts-ignore
  const pressData = useSelector((store: RootState) => store.Content.press);

  return (
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <Box className={classes.content}>
        <ContentTitle>Press</ContentTitle>

        {pressData.map((item: any, index: number) => (
          <Box className={classes.itemContainer} key={index}>
            <Hidden smUp>
              <Typography className={classes.type} variant="body2">{item.type}</Typography>
            </Hidden>
            <Typography title={item.title} className={classes.title} variant="body1">{item.title}</Typography>
            <Hidden xsDown>
              <Typography className={classes.type} variant="body2">{item.type}</Typography>
            </Hidden>
            <Typography className={classes.date} variant="body2">
              <DateLabel>{item.date}</DateLabel>
            </Typography>
            <SwitcheoLogo className={classes.icon} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Press;