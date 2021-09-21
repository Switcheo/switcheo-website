import { Box, BoxProps, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import ArrowLeft from "src/assets/ArrowLeft.svg";
import ArrowRight from "src/assets/ArrowRight.svg";
import { BlogEntry } from "src/utils/types";

interface Props extends BoxProps {
  posts: BlogEntry[]
}

const MobileBlogCard: React.FC<Props> = (props: Props) => {
  const { className, posts } = props;
  const classes = useStyles();
  const [selectIndex, setSelectIndex] = useState(0);

  const onChangeIndex = (index: number) => {
    if (index < 0) {
      setSelectIndex(posts.length - 1);
    } else {
      setSelectIndex(index);
    }
  };

  const selectedPost = useMemo(() => posts[selectIndex], [posts, selectIndex]);

  return (
    <Box className={clsx(classes.root, className)}>
      <Link href={selectedPost.url} passHref>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" color="primary">
            {selectedPost.tag}
          </Typography>
          <Box className={classes.blogTitle}>
            {selectedPost.title}
          </Box>
          <Typography variant="body2" color="textSecondary">
            {selectedPost.preview}
          </Typography>
        </Box>
      </Link>
      <Box className={classes.arrows}>
        <Box onClick={() => onChangeIndex((selectIndex - 1) % posts.length)} className={classes.leftArrow}>
          <ArrowLeft className={classes.arrowSvg} />
        </Box>
        <Box onClick={() => onChangeIndex((selectIndex + 1) % posts.length)}>
          <ArrowRight className={classes.arrowSvg} />
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    maxWidth: "90%",
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2, 1),
    },
  },
  blogTitle: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.125rem",
    lineHeight: "100%",
    color: theme.palette.text.secondary,
    margin: theme.spacing(2, 0, 3),
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem",
      margin: theme.spacing(1, 0, 2),
    },
  },
  arrows: {
    display: "flex",
    marginTop: theme.spacing(6),
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(3),
    },
  },
  arrowSvg: {
    width: "3.375rem",
    height: "3.375rem",
    "& path": {
      fill: "#C9D2D9",
    },
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.only("xs")]: {
      width: "1.375rem",
      height: "1.375rem",
    },
  },
  leftArrow: {
    marginRight: theme.spacing(8),
    [theme.breakpoints.only("xs")]: {
      marginRight: theme.spacing(4),
    },
  },
}));

export default MobileBlogCard;
