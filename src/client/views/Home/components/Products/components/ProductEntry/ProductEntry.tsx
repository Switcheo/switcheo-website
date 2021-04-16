import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { SwitcheoLogo } from "../../../../../../components";

export type ProductEntryProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href?: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 0,
    color: theme.palette.primary.main,
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    "&:first-child": {
      borderTop: `1px solid ${theme.palette.primary.main}`,
    },
    "&:hover $switcheoIcon, &:focus $switcheoIcon": {
      transform: "rotate(0)",
    },
    padding: theme.spacing(0, 1),
  },
  icon: {
    color: theme.palette.primary.main,
    height: 32,
    width: 32,
    marginRight: theme.spacing(2.5),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("md")]: {
      height: 24,
      width: 24,
    },
  },
  text: {
    flex: 1,
    textAlign: "left",
    textTransform: "none",
    fontWeight: "bold",
    paddingRight: "3px"
  },
  switcheoIcon: {
    height: 22,
    width: 22,
    transition: "transform .05s ease-in-out",
    transform: "rotate(45deg)",
    [theme.breakpoints.down("md")]: {
      height: 16,
      width: 16,
    },
    [theme.breakpoints.down("sm")]: {
      transform: "rotate(0)",
    },
  },
}));
const ProductEntry: React.FC<ProductEntryProps & React.HTMLAttributes<HTMLDivElement>> = (props: any) => {
  const { children, icon: Icon, className, href } = props;
  const classes = useStyles();
  return (
    <Button className={cls(classes.root, className)} href={href} target="_blank" >
      <Icon className={classes.icon} />
      <Typography color="primary" className={classes.text} variant="body2">{children}</Typography>
      <SwitcheoLogo className={classes.switcheoIcon} />
    </Button>
  );
};

export default ProductEntry;
