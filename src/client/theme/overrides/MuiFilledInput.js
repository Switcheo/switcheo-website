export default theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      // Reset on touch devices, it doesn"t add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette.primary.main,
      }
    },
    "&$focused": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  input: {
    padding: theme.spacing(1.5, 2.5),
  },
});
