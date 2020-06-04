import { Box, IconButton, FormControlLabel, Checkbox, TextField, Typography, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React from "react";
import FooterTitle from "../FooterTitle";
import SwitcheoLogo from "../../../SwitcheoLogo";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
  },
  textfield: {
    marginTop: theme.spacing(4),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
    "&:hover $logoIcon": {
      transform: "rotate(0)",
    },
  },
  form: {
    "&>span": {
      marginBottom: 0,
    },
  },
  checkboxText: {
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "-0.5px",
    lineHeight: "20px",
  },
  logoIcon: {
    color: "#fff",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
}));
const SubscribeBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <FooterTitle>Subscribe to our mailing list</FooterTitle>

      <FormControlLabel
        control={<Checkbox color="primary" />}
        className={classes.form}
        label={<Typography className={classes.checkboxText} variant="body2" color="primary">I understand and consent to the Privacy Policy</Typography>} />

      <TextField className={classes.textfield} variant="filled" placeholder="john@example.com"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SwitcheoLogo className={classes.logoIcon} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  );
};

export default SubscribeBox;