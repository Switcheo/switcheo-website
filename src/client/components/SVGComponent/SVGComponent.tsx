import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import cls from "classnames";

export interface SVGComponent {
  url: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    "& svg *": {
      fill: "currentColor",
    }
  },
}));
const SVGComponent: React.FC<SVGComponent & React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, className, url, ...rest } = props;
  const [svgData, setSvgData] = useState<string | null>(null);
  const classes = useStyles();

  useEffect(() => {
    if (!url)
      return setSvgData(null);

    fetch(url)
      .then(res => res.text())
      .then(text => setSvgData(text));
  }, [url]);

  return (
    <div {...rest} className={cls(classes.root, className)} dangerouslySetInnerHTML={{ __html: svgData }} />
  );
};

export default SVGComponent;