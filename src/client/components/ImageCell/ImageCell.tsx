import { Box, Hidden, BoxProps } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

export interface ImageCellProps extends BoxProps {
  mdUp?: boolean;
  smDown?: boolean;
  src: string;
  hide?: "smDown" | "mdUp";
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 1.5),
    flex: 1,
    flexBasis: "50%",
    backgroundColor: "#fafafa",
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  volume: {
    paddingTop: "100%",
  },
}));
const ImageCell: React.FC<ImageCellProps> = (props: any) => {
  const { children, className, hide, src, ...rest } = props;
  const classes = useStyles();
  const hiddenProps = {
    ... typeof hide === "string" && {
      [hide]: true,
    },
  };
  return (
    <Hidden {...hiddenProps}>
      <Box className={cls(classes.root, className)} style={{ backgroundImage: `url(${src})` }}>
        <Hidden mdUp>
          <Box className={classes.volume} />
        </Hidden>
      </Box>
    </Hidden>
  );
};

export default ImageCell;