import { Box, Container, Link, Typography, Grid, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { useSelector } from "react-redux";
import { ContentTitle, SwitcheoLogo, DateLabel } from "../../components";
import { RootState } from "../../store/types";
import { Press } from '../../store/content/types';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
  link: {
    '&:hover': {
      textDecoration: "none",
    },
  },
  content: {
    color: theme.palette.primary.main,
    minHeight: "80vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
    },
  },
  itemContainer: {
    cursor: "pointer",
    position: "relative",
    alignItems: "center",
    padding: theme.spacing(1, 0, 1),
    display: "flex",
    flexDirection: "row",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "unset",
      marginBottom: theme.spacing(6)
    },
    "&:hover, &:focus": {
      "& $title,$date,$type,$icon": {
        color: theme.palette.primary.light,
      },
      "& $icon": {
        transform: "rotate(0)",
      },
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
    marginBottom: 0,
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
    height: "22px",
    width: "22px",
    transform: "rotate(45deg)",
    transition: "transform .05s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      right: 4,
      bottom: 0,
      top: "unset",
    },
  },
}));

const _Press: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const pressData = useSelector((store: RootState) => store.Content.press);

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Container maxWidth="lg" className={classes.content}>
        <ContentTitle>Press</ContentTitle>

        {pressData.map((item: Press, index: number) => (
          <Link className={classes.link} href={item.link} target="_blank">
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
          </Link>
        ))}
      </Container>
    </Box>
  );
};

export default _Press;