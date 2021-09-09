import { Box, Container, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import BlogCard from "src/components/Common/BlogCard";
import { BlogEntry } from "src/utils/types";

interface Props {
  posts: BlogEntry[],
}

const DevelopersUpdate: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  const classes = useStyles();

  const updatePosts = useMemo(() => posts.filter((post) => post.title.includes("Update")), [posts]);

  return (
    <Box component="section" className={classes.root}>
      <Container maxWidth="lg" className={classes.contentContainer}>
        <Box className={classes.content}>
          <Box className={classes.text}>
            <Typography variant="h2" color="primary">
              Developers Update
            </Typography>
          </Box>
          {updatePosts.map((post) => <BlogCard key={post.title} layout="row" post={post} divider/>)}
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
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  text: {
    marginBottom: theme.spacing(5),
  },
}));

export default DevelopersUpdate;
