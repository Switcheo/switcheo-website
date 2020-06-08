export default theme => ({
  contained: {
    boxShadow: "none",
    borderRadius: 0,
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    padding: theme.spacing(2, 3),
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
    "&:hover,:active": {
      boxShadow: "none",
    },
  },
  containedSecondary: {
    color: theme.palette.primary.main,
    "&:hover,:active": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  containedPrimary: {
    color: theme.palette.secondary.main,
    "&:hover,:active": {
      backgroundColor: theme.palette.primary.main,
    },
  },
});
