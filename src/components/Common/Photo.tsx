import { Box, BoxProps, makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props extends BoxProps {
  src: string
  alt: string
  orientation?: "portrait" | "landscape"
}

const Photo: React.FC<Props> = (props: Props) => {
  const { className, src, alt, orientation = "landscape" } = props;
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, {
      [classes.portrait]: orientation === "portrait",
      [classes.landscape]: orientation === "landscape",
    }, className)}>
      <Image
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
    },
    [theme.breakpoints.down("sm")]: {
      "& img": {
        borderRadius: 30,
      },
    },
    [theme.breakpoints.only("xs")]: {
      "& img": {
        borderRadius: 14,
      },
    },
    position: "relative",
  },
  portrait: {
    width: "26.25rem",
    height: "35rem",
  },
  landscape: {
    width: "35rem",
    height: "26.25rem",
    [theme.breakpoints.down("lg")]: {
      width: "35rem",
      height: "26.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "36.5rem",
      height: "29.1825rem",
    },
    [theme.breakpoints.only("xs")]: {
      width: "15.8125rem",
      height: "11.5rem",
    },
  },
}));

export default Photo;
