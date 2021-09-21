import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
  const [hideCircle, setHideCircle] = useState(false);

  useEffect(() => {
    if (hideCircle) {
      setTimeout(() => {
        setHideCircle(false);
      }, 300);
    }
  }, [hideCircle]);

  const onChangeIndex = (index: number) => {
    if (index < 0) {
      setHideCircle(true);
      setTimeout(() => {
        setSelectIndex(areas.length - 1);
      }, 300);
    } else {
      setHideCircle(true);
      setTimeout(() => {
        setSelectIndex(index);
      }, 300);
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
                <Box display="flex" marginRight={4}>
                  <Box onClick={() => onChangeIndex((selectIndex - 1) % areas.length)} className={clsx(classes.arrow, classes.link)} marginRight={3}>
                    <ArrowLeft className={classes.arrowSvg} />
                  </Box>
                  <Box onClick={() => onChangeIndex((selectIndex + 1) % areas.length)} className={clsx(classes.arrow, classes.link)}>
                    <ArrowRight className={classes.arrowSvg} />
                  </Box>
                </Box>
              </Box>
              {areas.map((area, index) => (
                <Box key={index} className={classes.area}>
                  <Box className={classes.icon}>
                    {area.icon}
                  </Box>
                  <Box
                    className={clsx(classes.areaText, classes.link, { [classes.selected]: selectIndex === index })}
                    onClick={() => onChangeIndex(index)}
                  >
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
      <Box className={clsx(classes.circle, { hide: hideCircle })}>
        <AreaCircle selectIndex={selectIndex} areas={areas} />
      </Box>
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
    position: "relative",
    cursor: "pointer",
    zIndex: 1000,
  },
  arrowSvg: {
    width: "1.75rem",
    height: "1.75rem",
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
    transition: "opacity 0.3s ease-in, color 0.3s ease-in",
  },
  selected: {
    transition: "opacity 0.3s ease-in, color 0.3s ease-in",
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
  circle: {
    opacity: 1,
    transition: "opacity ease-in 0.3s",
    "&.hide": {
      transition: "opacity ease-in 0.3s",
      opacity: 0,
    },
  },
  link: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default InnovationAreas;
