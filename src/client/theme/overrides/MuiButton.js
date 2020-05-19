export default theme => ({
  contained: {
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
  },
  containedSecondary: {
    color: theme.palette.primary.main,
  },
  containedPrimary: {
    color: theme.palette.secondary.main,
  },
});
