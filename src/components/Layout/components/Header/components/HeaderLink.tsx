import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import React from "react";
import { HeaderLink } from "src/utils/types";

interface Props {
  link: HeaderLink
}

const HeaderMenu: React.FC<Props> = (props: Props) => {
  const { link } = props;
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Link href={link.url} passHref>
        <Box className={classes.root}>
          <Box className={classes.icon}>
            {link.icon}
          </Box>
          <Box>
            <Box className={classes.title}>
              {link.title}
            </Box>
            <Box className={classes.description}>
              {link.description}
            </Box>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
    },
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
    lineHeight: "130%",
  },
  title: {
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.25rem",
  },
  description: {
    fontFamily: "Roobert",
    fontSize: "1.0625rem",
  },
  icon: {
    marginRight: theme.spacing(2),
    width: "5rem",
    height: "5rem",
  },
}));

export default HeaderMenu;
