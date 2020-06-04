import moment from "moment";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";

export interface DateLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  format?: string;
  capitalize?: boolean;
};

const useStyles = makeStyles(theme => ({
  root: {
  },
}));

const getLabel = (input?: any, format?: string, capitalize?: boolean) => {
  if (typeof input !== "string")
    return;
  const dateMoment = moment(input);
  if (!dateMoment.isValid())
    return;

  if (format) return dateMoment.format(format);
  let result = dateMoment.fromNow();
  if (capitalize && result.length > 0)
    result = result.slice(0, 1).toUpperCase() + result.slice(1);
  return result;
};

const DateLabel: React.FC<DateLabelProps> = (props: any) => {
  const { children, className, capitalize, format, ...rest } = props;
  const classes = useStyles();

  const label = getLabel(children, format, capitalize) || "";


  return (
    <span {...rest} className={cls(classes.root, className)}>
      {label}
    </span>
  );
};

export default DateLabel;