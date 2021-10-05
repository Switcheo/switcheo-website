import { Box, Container, Divider, Grid, Hidden, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { BlogEntry } from "src/utils/types";
import { AnchorLink, BlogCard, MobileBlogCard } from "src/components/Common";

interface Props {
  posts: BlogEntry[],
}

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
    bannerPosts,
    newsPosts,
    spotlightPost,
  } = useMemo(() => {
    const bannerPosts: BlogEntry[] = [];
    const spotlightPost: BlogEntry[] = [];
    const newsPosts: BlogEntry[] = [];
    posts.forEach((post) => {
      if (bannerPosts.length < 3 && post.banner?.fields?.file?.url) {
        bannerPosts.push(post);
      } else if (spotlightPost.length < 1) {
        spotlightPost.push(post);
      } else if (newsPosts.length < 2) {
        newsPosts.push(post);
      }
    });
    if (spotlightPost.length < 1) {
      spotlightPost.push(posts[0]);
    }
    if (newsPosts.length < 1) {
      spotlightPost.push(posts[1]);
    }
    return {
      bannerPosts,
      newsPosts,
      spotlightPost,
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
                {bannerPosts.map((post) => (
                  <AnchorLink key={post.date} href={post.url}>
                    <Box className={classes.img}>
                      <Image src={"https:" + post.banner?.fields?.file?.url} alt={post.title} layout="fill" objectFit="contain" />
                    </Box>
                  </AnchorLink>
                ))}
              </Slider>
            </Box>
            <Hidden smDown>
              <BlogCard post={spotlightPost[0]} className={classes.spotlight}/>
            </Hidden>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={5}>
              {newsPosts.map((post) => <BlogCard key={post.title} post={post} divider />)}
            </Grid>
          </Hidden>
        </Grid>
        <Hidden mdUp>
          <MobileBlogCard posts={spotlightPost.concat(newsPosts)} />
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
    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("sm")]: {
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
    [theme.breakpoints.down("md")]: {
      paddingRight: theme.spacing(5),
    },
  },
  highlights: {
    width: "90%",
    "& img": {
      borderRadius: 15,
    },
    margin: theme.spacing(3, 6, 0, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(3, 6, 3, 0),
    },
    [theme.breakpoints.only("xs")]: {
      margin: 0,
    },
  },
  img: {
    padding: theme.spacing(1),
    position: "relative",
    width: "100%",
    height: "min(40vw, 21.25rem)",
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
