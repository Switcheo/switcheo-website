import { Box, Collapse, Container, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { SwthButton } from "src/components/Common";
import { HeaderTabContent } from "src/utils/types";
import HeaderLink from "./HeaderLink";

interface Props {
  selectedTab: HeaderTabContent
}

const HeaderMenu: React.FC<Props> = (props: Props) => {
  const { selectedTab } = props;
  const classes = useStyles();

  return (
    <Collapse 
      classes={{ root: classes.root }}
      in={!!selectedTab?.links}
      unmountOnExit
    >
      <Container maxWidth="lg" className={classes.container}>
        {!!selectedTab?.links && (
          <>
            <Box className={classes.title}>
              <Box className={classes.titleText}>
                {selectedTab.sectionTitle}
              </Box>
              {selectedTab?.button && (
                <Box marginTop={3}>
                  <SwthButton className={classes.button} href={selectedTab.url ?? "/"}>
                    {selectedTab.button}
                  </SwthButton>
                </Box>
              )}
            </Box>
            <Grid container spacing={3}>
              {selectedTab.links.map((link) => <HeaderLink key={link.title} link={link} />)}
            </Grid>
          </>
        )}
      </Container>
    </Collapse>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    top: "8.5rem",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(7.5, 5),
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "25%",
    minWidth: "18.75rem",
    marginRight: theme.spacing(10),
  },
  titleText: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.375rem",
    lineHeight: "120%",
    letterSpacing: "-0.04em",
  },
  button: {
    fontSize: "1.125rem",
    height: "1.25rem",
  },
}));

export default HeaderMenu;
