import { Box, IconButton, FormControlLabel, Checkbox, TextField, Typography, InputAdornment, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import cls from "classnames";
import React, { useState } from "react";
import FooterTitle from "../FooterTitle";
import SwitcheoLogo from "../../../SwitcheoLogo";
import { Paths, SendGridAPI, emailRegex } from "../../../../constants";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
  },
  textfield: {
    width: "100%",
    "&:hover $logoIcon, &:focus $logoIcon": {
      transform: "rotate(0)",
    },
  },
  form: {
    marginBottom: theme.spacing(1),
    "&>span": {
      marginBottom: 0,
    },
  },
  checkboxText: {
    fontWeight: "bold",
    fontSize: "19px",
    lineHeight: "19px",
    letterSpacing: "-0.5px",
    "& a": {
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: 1.2,
    },
  },
  logoIcon: {
    height: 16,
    width: 16,
    color: "#fff",
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
  text: {
    fontSize: "90%",
    paddingLeft: theme.spacing(1),
  }
}));
const SubscribeBox: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();
  const [ackTerms, setAckTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubscribe = async () => {
    if (loading) return;
    if (!email.match(emailRegex)) return setError("Please enter a valid email address.");
    if (!ackTerms) return setError("Please tick the checkbox to acknowledge our policy.");
    setError("");
    setSuccess("");
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("first_name", "");
      body.append("last_name", "");
      body.append("token", SendGridAPI.token);
      const response = await fetch(SendGridAPI.endpoint, { method: "POST", body });
      if (response.ok) {
        setSuccess("That worked! Check your email to confirm subscription.");
      } else {
        setError("Failed to sign up, please try again later.");
        console.error(new Error(JSON.stringify(response, null, 4)))
      }
    } catch (error) {
      if (error && error.message)
        setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box {...rest} className={cls(classes.root, className)}>
      <FooterTitle>Subscribe to our mailing list</FooterTitle>

      <FormControlLabel
        control={<Checkbox color="primary" />}
        className={classes.form}
        onChange={(e, checked) => setAckTerms(checked)}
        label={(
          <Typography className={classes.checkboxText} variant="body2" color="primary">
            I understand and consent to the{" "}
            <a href={Paths.privacy_policy}>Privacy Policy</a>
          </Typography>
        )} />

      <TextField
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        className={classes.textfield}
        variant="filled"
        placeholder="john@example.com"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onSubscribe} disabled={loading}>
                <SwitcheoLogo className={classes.logoIcon} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {!!error && <Typography className={classes.text} variant="body2" color="error">{error}</Typography>}
      {!!success && <Typography className={classes.text} variant="body2" color="primary">{success}</Typography>}
    </Box>
  );
};

export default SubscribeBox;