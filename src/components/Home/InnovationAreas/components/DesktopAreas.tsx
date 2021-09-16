import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import clsx from "clsx";
import AreaCircle from "./AreaCircle";
import { InnovationAreaContent } from "src/utils/types";

interface Props {
  areas: InnovationAreaContent[]
}

const InnovationAreas: React.FC<Props> = (props: Props) => {
  const { areas } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const onChangeIndex = (index: number) => {
    if (index < 0) {
      setSelectIndex(areas.length - 1);
    } else {
      setSelectIndex(index);
    }
  };

  return (
    <>
      <Box component="section" className={classes.section}>
        <Container maxWidth="lg" className={classes.contentContainer}>
          <Box className={classes.content}>
            <Box className={classes.areas}>
              <Box className={classes.areaBar}>
                <Typography variant="h5" color="secondary">
                  Innovation Areas
                </Typography>
                <Box display="flex" marginRight={3}>
                  <Box onClick={() => onChangeIndex((selectIndex - 1) % areas.length)} className={classes.arrow} marginRight={3}>
                    <ArrowLeft />
                  </Box>
                  <Box onClick={() => onChangeIndex((selectIndex + 1) % areas.length)} className={classes.arrow}>
                    <ArrowRight />
                  </Box>
                </Box>
              </Box>
              {areas.map((area) => (
                <Box key={area.title} className={classes.area}>
                  <Box className={classes.icon}>
                    {area.icon}
                  </Box>
                  <Box className={clsx(classes.areaText, { [classes.selected]: selectIndex === area.area })}>
                    <Typography variant="h4" color="inherit">
                      {area.title}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      <AreaCircle selectIndex={selectIndex} areas={areas} />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  section: {
    backgroundColor: theme.palette.primary.main,
    position: "relative",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(45),
    zIndex: 0,
  },
  contentContainer: {
    position: "relative",
    display: "flex",
    paddingLeft: theme.spacing(6),
    zIndex: 100,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  arrow: {
    cursor: "pointer",
    zIndex: 100,
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
    marginBottom: theme.spacing(8),
  },
  area: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1.5, 0),
  },
  areaText: {
    color: "#C9D2D9",
    opacity: 0.4,
  },
  selected: {
    color: theme.palette.secondary.main,
    opacity: 1,
  },
  icon: {
    width: "5rem",
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
}));

export default InnovationAreas;
