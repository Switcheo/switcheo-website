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
    "&:hover $logoIcon": {
      transform: "rotate(0)",
    },
  },
  form: {
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
    "&>span": {
      marginBottom: 0,
    },
  },
  checkboxText: {
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "-0.5px",
    lineHeight: "20px",
    "& a": {
      color: theme.palette.primary.main,
    }
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
  const [ackTerms, setAckTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const onSubscribe = async () => {
    if (loading) return;
    if (!email.match(emailRegex)) return setError("Please enter a valid email address");
    if (!ackTerms) return setError("Please tick the box to accept our conditions");
    setError("");
    try {
      const body = new FormData();
      body.append("email", email);
      body.append("first_name", "");
      body.append("last_name", "");
      body.append("token", SendGridAPI.token);
      const response = await fetch(SendGridAPI.endpoint, { method: "POST", body });
      setError("Check your email to confirm subscription");
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

        {!!error && <Typography variant="body2" color="error">{error}</Typography>}
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
    </Box>
  );
};

export default SubscribeBox;