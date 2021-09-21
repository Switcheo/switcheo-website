import { Box, Collapse, Container, Grid, Theme, Typography } from "@material-ui/core";
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
      in={selectedTab?.links.length > 0}
    >
      <Container maxWidth="lg" className={classes.container}>
        {selectedTab?.links.length > 0 && (
          <>
            <Box className={classes.title}>
              <Box marginBottom={3}>
                <Typography variant="h4" color="primary">
                  {selectedTab.sectionTitle}
                </Typography>
              </Box>
              <SwthButton className={classes.button} href="/">
                {selectedTab.button}
              </SwthButton>
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
    marginRight: theme.spacing(10),
  },
  button: {
    fontSize: "1.125rem",
    height: "1.25rem",
  },
}));

export default HeaderMenu;
