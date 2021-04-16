import { Box, BoxProps, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import cls from "classnames";
import { ViewLink } from "../../../../../../components";
import { minBlockHeight, minProductBlockHeight } from "../../../../../../constants";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


type ReponsiveGridSize = boolean | 4 | 6 | "auto" | 3 | 10 | 1 | 2 | 5 | 7 | 8 | 9 | 11 | 12 
export type Product = {
  title: string;
  descriptor: string;
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  highlight?: boolean;
  link?: string;
  responsive: {
    xs?: ReponsiveGridSize,
    sm?: ReponsiveGridSize,
    md?: ReponsiveGridSize,
    lg?: ReponsiveGridSize,
    xl?: ReponsiveGridSize,
  }
};

export interface ProductColumnProps extends BoxProps {
  product: Product;
  index: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 1.5),
    height: '100%',
    minHeight: minProductBlockHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 3),
      minHeight: 0,
    },
    [theme.breakpoints.down("md")]: {
      minHeight: minBlockHeight,
    },
  },
  alternate: {
    background: theme.palette.primary.main,
    color: "#fff",
    '& $content, & $title, & $icon': {
      color: "#fff",
    },
    '& $divider': {
      backgroundColor: "#fff",
    },
    '& $link': {
      color: '#fff',
      "&:hover svg, &:focus svg": {
        color: '#fff',
      },
    }
  },
  content: {
    color: theme.palette.primary.main,
    minHeight: 420,
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      minHeight: 250,
    }
  },
  title: {
    display: "flex",
    flexDirection: "row",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textDecoration: "none",
    marginBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 100,
  },
  link: {
    textDecoration: "none",
  },
}));

const ProductColumn: React.FC<ProductColumnProps> = (props: any) => {
  const classes = useStyles();
  const { children, product, className, index, ...rest } = props;
  const Icon = product.icon;
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'))
  const inversed = matchSM && !matchXS ? (index === 1 || index === 2) : (index === 0 || index === 2);
  const color = inversed ? 'textSecondary' : 'textPrimary';
  return (
    <Box {...rest} className={cls(classes.root, className, { [classes.alternate]: inversed })}>
      <Icon className={classes.icon} />
      <Divider className={classes.divider} />
      <Box className={classes.content}>
        <Typography className={classes.title} variant="body2" color={color}>{product.title}</Typography>
        <Typography variant="body2" color={color}>{product.descriptor}</Typography>
        <ViewLink target="_blank" href={product.link} className={classes.link} />
        <Box flex={1} />
        <Typography variant="body2" color={color}>{product.description}</Typography>
      </Box>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default ProductColumn;
