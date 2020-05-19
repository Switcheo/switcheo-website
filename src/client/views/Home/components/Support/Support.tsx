import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton } from "../../../../components";

const useStyles = makeStyles(theme => ({
  root: {
  },
  description: {
    maxWidth: 600,
    [theme.breakpoints.down("lg")]: {
      maxWidth: 480,
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "unset",
    },
  },
}));

const Support: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Need support?</ContentTitle>
      <Typography variant="body1" color="primary" className={classes.description}>
        Sitiis ni ut odis dolut evelit aut quodi blaut harchictor atectat vitatioreped maximil luptat laborem laccateni quoditaecum et es molo exerae voluptatquia sam error restionsecta que simeni ommoluptate cone perferi busape veror aut volore rehenis delliqui opti.
      </Typography>
      <Box flex={1} />
      <CTAButton white>Get support</CTAButton>
    </ContentSection>
  );
};

export default Support;