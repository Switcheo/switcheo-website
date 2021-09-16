import { Box, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React from "react";

const Photo: React.FC<ImageProps> = (props: ImageProps) => {
  const { className, src, alt } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)}>
      <Image
        priority
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center top"
      />
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& img": {
      borderRadius: 50,
      [theme.breakpoints.down("sm")]: {
        borderRadius: 30,
      },
      [theme.breakpoints.only("xs")]: {
        borderRadius: 14,
      },
    },
    position: "relative",
  },
}));

export default Photo;
