import moment from "moment";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

export interface DateLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  format?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const getLabel = (input?: any, format?: string) => {
  if (typeof input !== "string")
    return;
  const dateMoment = moment(input);
  if (!dateMoment.isValid())
    return;

  if (format) return dateMoment.format(format);
  return dateMoment.fromNow();
};

const DateLabel: React.FC<DateLabelProps> = (props: any) => {
  const { children, className, format, ...rest } = props;
  const classes = useStyles();

  const label = getLabel(children, format) || "";


  return (
    <span {...rest} className={cls(classes.root, className)}>
      {label}
    </span>
  );
};

export default DateLabel;