import { Divider, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle } from "../../../../components";
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
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(2,0,0,0),
      width: '12rem'
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(2,0,0,0),
      width: '8rem'
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
          return(
            <Grid item xs={6} md={4} key={partner.name}>
              <Divider className={classes.divider} />
              <img src={partner.logo} alt={partner.name} className={classes.logo} />
            </Grid>
          )
        })}
      </Grid>
        
    </ContentSection>
  );
};

export default Partners;