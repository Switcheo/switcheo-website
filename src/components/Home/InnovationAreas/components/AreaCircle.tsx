import { Box, makeStyles, Theme } from "@material-ui/core";
import Image from "next/image";
import React, { useMemo } from "react";
import { InnovationAreaContent } from "src/utils/types";

interface Props {
  areas: InnovationAreaContent[]
  selectIndex: number
}

const AreaCircle: React.FC<Props> = (props: Props) => {
  const { areas, selectIndex } = props;
  const classes = useStyles();

  const selectedArea = useMemo(() => areas[selectIndex], [areas, selectIndex]);

  return (
    <Box borderRadius="50%" className={classes.root}>
      <Image src={selectedArea.background} alt={selectedArea.title} />
      <Box className={classes.gradient} />
      <Box className={classes.content}>
        <Box marginBottom={4}>
          <Box className={classes.description}>
            {selectedArea.description}
          </Box>
        </Box>
        {selectedArea.products.map((product) => (
          <Box key={product.name} className={classes.product}>
            {product.icon}
            <Box className={classes.productName}>
              {product.name}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& img": {
      borderRadius: "50%",
      zIndex: -100,
    },
    width: "min(70vw, 62.5rem)",
    height: "min(70vw, 62.5rem)",
    marginTop: "max(-60vw, -52.5rem)",
    zIndex: 1,
    color: theme.palette.common.white,
    position: "relative",
    left: "48vw",
  },
  gradient: {
    marginTop: "max(-70.5vw, -63rem)",
    borderRadius: "50%",
    width: "min(70vw, 62.5rem)",
    height: "min(70vw, 62.5rem)",
    background: "linear-gradient(180deg, #222222 0%, rgba(34, 34, 34, 0) 100%);",
    mixBlendMode: "normal",
  },
  content: {
    zIndex: 100,
    marginTop: "max(-55vw, -46rem)",
    marginLeft: "min(10vw, 9rem)",
    width: "55%",
  },
  description: {
    fontFamily: "Roobert",
    fontSize: "1.8125rem",
    lineHeight: "160%",
    [theme.breakpoints.only("md")]: {
      lineHeight: "120%",
    },
  },
  product: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  productName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roobert-SemiBold",
    fontSize: "1.3125rem",
    marginLeft: theme.spacing(3),
  },
}));

export default AreaCircle;
