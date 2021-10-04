import { Link as MuiLink, LinkProps } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const AnchorLink: React.FC<LinkProps> = (props: LinkProps) => {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith("https://");

  return (
    <Link href={href as string} passHref>
      <MuiLink
        underline="none"
        target={isExternal ? "_blank" : undefined}
        {...rest}
      >
        {children}
      </MuiLink>
    </Link>
  );
};

export default AnchorLink;
