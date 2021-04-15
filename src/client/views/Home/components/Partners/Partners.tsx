import { Divider, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";
import { Box } from "@material-ui/core";
import { Paths } from "../../../../constants";
import PARTNERS from "../../assets/Partners"

const useStyles = makeStyles(theme => ({
    root: {
    backgroundColor: "#DEDEDE",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4, 3, 6),
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    margin: 0,
    lineHeight: 0
  },
  logo: {
    width: '13rem',
    margin: theme.spacing(2,0,0,2),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2,0,0,0),
      width: '8rem'
    },
  },
  threeACLogo:{
    width: '21rem',
    margin: theme.spacing(2,0,0,2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2.5,0,0,0),
      width: '18rem'
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2,0,0,0),
      width: '9rem'
    },
  },
  bigNumber: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "427px",
    lineHeight: "350px",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      fontSize: "312px",
      lineHeight: "268px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "202px",
      lineHeight: "183px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "120px",
      lineHeight: "115px",
    },
  },
  logoContainer: {
    marginTop: theme.spacing(1)
    
  }
}));

const Partners: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Our partners</ContentTitle>
      <Grid container spacing={6} className={classes.logoContainer}>
        {PARTNERS.map((partner) => {
          const Icon = partner.logo
          return(
            <Grid item xs={6} md={4} key={partner.name}>
              <Divider className={classes.divider} />
              <img src={partner.logo} alt={partner.name} className={classes[partner.name === "Three Arrows Capital" ? "threeACLogo" : "logo"]} />
            </Grid>
          )
        })}
      </Grid>
        
    </ContentSection>
  );
};

export default Partners;