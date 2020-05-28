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

    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      paddingTop: "50%",
    }
  },
  content: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
  },
  divider: {
    backgroundColor: theme.palette.secondary.main,
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
    fontSize: 48,
    lineHeight: "60px",
    letterSpacing: "-1px",
    paddingLeft: 0,
    textTransform: "none",

    [theme.breakpoints.down("md")]: {
      fontSize: 30,
      lineHeight: "34px",
      letterSpacing: "-.5px",
    },
  },
  jobPostingContainer: {
    paddingLeft: theme.spacing(3),

    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      marginTop: theme.spacing(3),
    },
  },
  icon: {
    marginLeft: "auto",
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),

    [theme.breakpoints.down("md")]: {
      height: theme.spacing(3),
      width: theme.spacing(3),
    },
  },
}));

const Culture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const jobOpeningData = useSelector((store: RootState) => store.Content.jobOpening);
  return (
    <Container maxWidth="xl" {...rest} className={cls(classes.root, className)}>
      <Box className={classes.banner} />
      <Box className={classes.content}>
        <ContentTitle secondary>Our culture</ContentTitle>
        <Divider className={classes.divider} />
        <Typography variant="subtitle1" color="secondary">Ad evenim eos quo ilibus aspedigniste sus ilicatior ad mos apiende rferchic te porro dem quia quo que con plat officiusdam velitatet modipsus. Lenimodissin peri audanducipis expedis a diciat. Et parum audi iundae laborro et enderferum quis et quaeped exero od quo que pa quat re aut la cum sinvel in entotat iuribus quatem laborit alitio tem quam senditaque dendunt velluptatiur aut. Agnientio omnienderro bea cullo con res re venis in reprero conseque delitius, conecusam hil eos et omnis imi, quae. Editium sunt.</Typography>

        <Box className={classes.jobContent}>
          <ContentTitle secondary>Join the team</ContentTitle>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Divider className={classes.divider} />
              <Typography variant="body1" color="secondary">Opta audae quas nonsed quatur mostibus tem aceate, dae commoloreped magnist, nonsequaatur re, autaectatis vero mil iduciatur sitionet laut quia porpost voluptatenis saeporibus.</Typography>
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
      </Box>
    </Container>
  );
};

export default Culture;