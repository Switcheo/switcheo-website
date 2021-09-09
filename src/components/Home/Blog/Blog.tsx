import { Box, Container, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import React, { useMemo } from "react";
import { BlogEntry } from "src/utils/types";
import BlogPlaceholder from "src/assets/BlogPlaceholder.svg";
import BlogCard from "src/components/Common/BlogCard";

interface Props {
  posts: BlogEntry[],
}

const Blog: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  const classes = useStyles();

  const {
    newsPosts,
    spotlightPost,
  } = useMemo(() => {
    return {
      newsPosts: posts.filter((post) => post.tag === "News" && !post.title.includes("Update")).slice(0, 2),
      spotlightPost: posts.find((post) => post.tag !== "News") ?? posts[0],
    };
  }, [posts]);

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.text}>
          <Typography variant="h2" color="primary">
            Thoughts, ideas from the Switcheo team
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box marginRight={6} marginTop={6}>
              <Image src={BlogPlaceholder} alt="BlogPlaceholder" />
            </Box>
            <BlogCard post={spotlightPost} className={classes.spotlight}/>
          </Grid>
          <Grid item xs={12} md={5}>
            {newsPosts.map((post) => <BlogCard key={post.title} post={post} divider />)}
          </Grid>
        </Grid>
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
    padding: theme.spacing(5, 8, 0, 5),
  },
  text: {
    marginBottom: theme.spacing(20),
  },
  spotlight: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(6),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(20),
  },
}));

export default Blog;
