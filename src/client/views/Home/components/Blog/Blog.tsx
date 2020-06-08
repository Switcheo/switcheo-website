import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import { ContentSection, ContentTitle, CTAButton, DateLabel } from "../../../../components";
import { Box, Grid, Divider, Typography, Hidden } from "@material-ui/core";
import { Paths } from "../../../../constants";
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
    "&:hover $divider": {
      borderTop: `1px solid ${theme.palette.primary.dark}`,
    },
  },
  divider: {
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
  preview: {
    fontSize: "20px",
    lineHeight: "22px",
  },
  dateLabel: {
    fontSize: "16px",
    lineHeight: "20px",
  },
  txtLink: {
    fontSize: "20px",
    lineHeight: "24px",
    textDecoration: "none",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    minHeight: theme.spacing(10),
    "&:hover": {
      color: theme.palette.primary.dark,
    },
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
                <Typography className={classes.txtLink} variant="body2" component="a" href={item.url} target="_blank">{item.title}</Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.preview} color="primary" variant="body2">
                  {item.preview}
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={classes.dateLabel} color="primary" variant="body2">
                  <DateLabel capitalize>{item.date}</DateLabel>
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