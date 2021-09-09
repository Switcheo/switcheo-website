import { Box, BoxProps, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { BlogEntry } from "src/utils/types";

interface Props extends BoxProps {
  post: BlogEntry
  layout?: "row" | "column"
  divider?: boolean
}

const BlogCard: React.FC<Props> = (props: Props) => {
  const { className, post, layout = "column", divider } = props;
  const classes = useStyles();

  return (
    <Link href={post.url} passHref>
      <Box
        className={clsx(classes.root, {
          [classes.divider]: divider,
          [classes.row]: layout === "row",
          [classes.column]: layout === "column",
        }, className)}
      >
        <Grid container spacing={layout === "row" ? 4 : 2} direction={layout} alignItems="stretch">
          <Grid item xs={layout === "row" ? 1 : 12}>
            <Typography variant="body2" color="primary">
              {post.tag}
            </Typography>
          </Grid>
          <Grid item xs={layout === "row" ? 2 : 12}>
            <Box 
              className={clsx(classes.blogTitle, {
                [classes.rowTitle]: layout === "row",
                [classes.columnTitle]: layout === "column",
              })}
            >
              {post.title}
            </Box>
          </Grid>
          <Grid item xs={layout === "row" ? 8 : 12}>
            <Box 
              className={clsx({
                [classes.rowDescription]: layout === "row",
                [classes.columnDescription]: layout === "column",
              })}
            >
              <Typography variant="body2" color="textSecondary">
                {post.preview}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      cursor: "pointer",
    },
  },
  divider: {
    borderTop: "1px solid #4C4C4C",
  },
  row: {
    padding: theme.spacing(4, 0),
  },
  column: {
    padding: theme.spacing(5, 0, 15),
  },
  blogTitle: {
    fontFamily: "Roobert-Medium",
    fontSize: "2.5rem",
    lineHeight: "2.5rem",
    color: theme.palette.text.secondary,
    fontWeight: 400,
  },
  rowTitle: {
    width: "16rem",
  },
  columnTitle: {
    maxWidth: "80%",
  },
  rowDescription: {
    padding: theme.spacing(0, 10, 0, 4),
  },
  columnDescription: {
  },
}));

export default BlogCard;
