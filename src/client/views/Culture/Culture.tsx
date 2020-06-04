import { Box, Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { ContentTitle, SwitcheoLogo } from "../../components";
import { RootState } from "../../store/types";
import urlBannerImage from "./assets/banner.png";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 2275,
    backgroundColor: theme.palette.primary.main,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    }
  },
  banner: {
    marginTop: theme.spacing(3),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${urlBannerImage})`,
    paddingTop: "33%",
    maxHeight: "40vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      maxHeight: "unset",
      paddingTop: "50%",
    }
  },
  content: {
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
  },
  margin: {
    marginBottom: theme.spacing(1),
  },
  link: {
    color: theme.palette.secondary.main,
    fontWeight: "bold",
  },
  jobContent: {
    marginTop: 200,

    [theme.breakpoints.down("md")]: {
      marginTop: 100,
      marginBottom: theme.spacing(5),
    },

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
  jobPosting: {
    color: theme.palette.secondary.main,
    borderRadius: 0,
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    fontSize: 40,
    lineHeight: "50px",
    letterSpacing: "-1px",
    paddingLeft: 0,
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      fontSize: 30,
      lineHeight: "34px",
      letterSpacing: "-.5px",
    },
    "&:hover": {
      color: theme.palette.secondary.dark,
      borderBottom: `1px solid ${theme.palette.secondary.dark}`,
      "& $icon": {
        transform: "rotate(0)",
      },
    }
  },
  jobPostingContainer: {
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginTop: theme.spacing(3),
    },
  },
  icon: {
    marginLeft: "auto",
    height: theme.spacing(3),
    width: theme.spacing(3),
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(2),
      width: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
}));

const Culture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const jobOpeningData = useSelector((store: RootState) => store.Content.jobOpening);
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <Box className={classes.banner} />
      <Container maxWidth="lg" className={classes.content}>
        <ContentTitle secondary>Our culture</ContentTitle>
        <Divider className={cls(classes.divider, classes.margin)} />
        <Typography variant="subtitle1" color="secondary">
          At Switcheo, we start small, think big, and learn fast.
          We strive to create a diverse workspace that is encouraging,
          positive, and inclusive. We are a team of agile, bold, and
          innovative individuals in a growth-oriented environment. Our
          flexibility and diversity create a culture where people share
          knowledge and ideas freely and bring out the best in each
          other.
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          Our culture extends beyond good business practices. It
          is essential to us that the Switcheo work environment is one
          in which employees feel valued, heard, and inspired. We
          respect each others’ opinions and never waver on our
          fundamental beliefs.
        </Typography>

        <Box id="careers" className={classes.jobContent}>
          <ContentTitle secondary>Join us</ContentTitle>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Divider className={cls(classes.divider, classes.margin)} />
              <Typography variant="body1" color="secondary">
                Like what you’ve seen? Come to Switcheo, where we try
                new things in ways others haven’t, and pave the routes
                not yet taken.
              </Typography>
              <div style={{ height: 16 }} />
              <Typography variant="body1" color="secondary">
                Don’t see a role but think you belong here?
                Drop us a message at{" "}
                <Typography className={classes.link} component="a" href="mailto:careers@switcheo.network">
                  careers@switcheo.network
                </Typography>.
              </Typography>
            </Grid>
            <Grid className={classes.jobPostingContainer} item xs={12} md={6}>
              <Divider className={classes.divider} />
              <Box display="flex" flexDirection="column">
                {jobOpeningData.map((posting, index) => (
                  <Button key={index} className={classes.jobPosting} href={posting.url} target="_blank">{posting.role}
                    <SwitcheoLogo className={classes.icon} />
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Culture;