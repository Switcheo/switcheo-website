import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton, DateLabel } from "../../../../components";
import { Box, Grid, Divider, Typography, Hidden } from "@material-ui/core";
import { Paths } from "../../../../contants";
import { RootState } from "../../../../store/types";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#DEDEDE",
  },
  wrapper: {
    flex: 1,
    margin: theme.spacing(0, -1.5),
    width: `calc(100% + ${theme.spacing(3)}px)`,
  },
  item: {
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(3),
    "& a,p": {
      display: "block",
      paddingBottom: theme.spacing(3),
    },
  },
  divider: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
  txtLink: {
    textDecoration: "none",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    minHeight: theme.spacing(10),
  },
}));

const Blog: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const blogEntryData = useSelector((store: RootState) => store.Content.blogEntry);
  return (
    <ContentSection {...rest} className={cls(classes.root, className)}>
      <ContentTitle>Our blog</ContentTitle>
      <Box className={classes.wrapper}>
        <Grid container>
          {blogEntryData.map((item, index) => (
            <Hidden key={index} xsDown={index >= 1}>
              <Grid className={classes.item} key={index} item xs={12} sm={6}>
                <Divider className={classes.divider} />
                <Typography color="primary" variant="body2">
                  <DateLabel>{item.date}</DateLabel>
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.txtLink} variant="body2" component="a" href={item.url} target="_blank">{item.title}</Typography>
                <Divider className={classes.divider} />
                <Typography color="primary" variant="body2">
                  <span style={{ fontSize: ".8em" }}>{item.preview}</span>
                </Typography>
              </Grid>
            </Hidden>
          ))}
        </Grid>
      </Box>
      <CTAButton white href={Paths.blog} target="_blank">Read more</CTAButton>
    </ContentSection>
  );
};

export default Blog;