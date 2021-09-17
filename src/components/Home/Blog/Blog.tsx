import { Box, Container, Divider, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BlogEntry } from "src/utils/types";
import { BlogCard, MobileBlogCard } from "src/components/Common";

import { DAppsUpdates, InfrastructureUpdates, WhiteSpacesUpdates } from "src/assets/blog";

interface Props {
  posts: BlogEntry[],
}

const photos = [ InfrastructureUpdates, DAppsUpdates, WhiteSpacesUpdates ];

const Blog: React.FC<Props> = (props: Props) => {
  const { posts } = props;
  const classes = useStyles();

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };

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
            <Box className={classes.highlights}>
              <Slider {...settings}>
                {photos.map((photo, index) => (
                  <Box key={index} className={classes.img}>
                    <Image src={photo} alt={index.toString()} priority />
                  </Box>
                ))}
              </Slider>
            </Box>
            <Hidden smDown>
              <BlogCard post={spotlightPost} className={classes.spotlight}/>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={5}>
              {newsPosts.map((post) => <BlogCard key={post.title} post={post} divider />)}
            </Grid>
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <MobileBlogCard posts={posts.filter((post) => !post.title.includes("Update"))} />
          <Divider classes={{ root: classes.divider }} />
        </Hidden>
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
    padding: theme.spacing(2, 8, 0, 5),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(8, 8, 0),
    },
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(5, 4, 0, 5),
    },
  },
  text: {
    marginBottom: theme.spacing(17),
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%",
      marginBottom: theme.spacing(5),
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
    },
  },
  spotlight: {
    marginRight: theme.spacing(6),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(20),
  },
  highlights: {
    width: "90%",
    "& img": {
      borderRadius: 15,
    },
    margin: theme.spacing(3, 6, 5, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 6, 3, 0),
    },
    [theme.breakpoints.only("xs")]: {
      margin: 0,
    },
  },
  img: {
    padding: theme.spacing(1),
    "& img": {
      borderRadius: 15,
    },
  },
  divider: {
    marginTop: theme.spacing(5),
    height: 3,
    width: "90%",
    [theme.breakpoints.only("xs")]: {
      marginTop: theme.spacing(3),
      height: 1,
    },
  },
}));

export default Blog;
