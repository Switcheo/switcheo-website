import { Box, Container, Divider, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { InnovationAreaContent } from "src/utils/types";
import ProductLabel from "./ProductLabel";

interface Props {
  areas: InnovationAreaContent[]
}

const MobileAreas: React.FC<Props> = (props: Props) => {
  const { areas } = props;
  const classes = useStyles();

  return (
    <Box component="section" className={classes.section}>
      <Container className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.areas}>
            <Box className={classes.areaBar}>
              <Typography variant="h5" color="secondary">
                Innovation Areas
              </Typography>
            </Box>
            {areas.map((area, index) => (
              <>
              <Box key={area.title} className={classes.area}>
                <Box className={classes.areaHeading}>
                  <Box className={classes.icon}>
                    {area.icon}
                  </Box>
                  <Box className={classes.areaText}>
                    {area.title}
                  </Box>
                </Box>
                <Box className={classes.description}>
                  <Typography variant="body1" color="inherit">
                    {area.description}
                  </Typography>
                </Box>
                {area.products.map((product) => <ProductLabel key={product.name} product={product} />)}
              </Box>
              {index !== (areas.length - 1) && (
                <Divider classes={{ root: classes.divider }} />
              )}
              </>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    padding: theme.spacing(5, 10),
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2, 3, 7),
    },
  },
  contentContainer: {
    position: "relative",
    display: "flex",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  areas: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  areaBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(-5),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(-2),
      marginLeft: theme.spacing(1),
    },
  },
  area: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(15, 2, 10),
    color: theme.palette.common.white,
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(7, 1, 5),
    },
  },
  areaHeading: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  areaText: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.6875rem",
    lineHeight: "100%",
    marginLeft: theme.spacing(3),
    maxWidth: "70%",
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.375rem",
      marginLeft: theme.spacing(1),
    },
  },
  icon: {
    width: "6rem",
    [theme.breakpoints.only("xs")]: {
      width: "2.5rem",
    },
  },
  description: {
    marginBottom: theme.spacing(8),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(2),
    },
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.only("sm")]: {
      height: 2,
    },
  },
}));

export default MobileAreas;
