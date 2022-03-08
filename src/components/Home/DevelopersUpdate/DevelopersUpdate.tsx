import { Box, Container, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import { MobileBlogCard } from "src/components/Common";
import BlogCard from "src/components/Common/BlogCard";
import { BlogEntry } from "src/utils/types";

interface Props {
  posts: BlogEntry[],
}

const DevelopersUpdate: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  const classes = useStyles();

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <Typography variant="h2" color="primary">
              Developers Update
            </Typography>
          </Box>
          <Hidden smDown>
            {posts.slice(0,5).map((post) => <BlogCard key={post.title} layout="row" post={post} divider/>)}
          </Hidden>
          <Hidden mdUp>
            <MobileBlogCard posts={posts} />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
  },
  contentContainer: {
    position: "relative",
    padding: theme.spacing(15, 12, 15, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 8),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5),
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  text: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: 0,
    },
  },
}));

export default DevelopersUpdate;
