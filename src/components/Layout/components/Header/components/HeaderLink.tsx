import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
      <Box className={classes.root}>
        <Box marginRight={2}>
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
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
}));

export default HeaderMenu;
