
import { ReactComponent as urlAccountIcon } from "./assets/account.svg";
import { ReactComponent as urlCrossChainIcon } from "./assets/cross-chain.svg";
import { ReactComponent as urlDecentralizationIcon } from "./assets/decentralization.svg";
import { ReactComponent as urlTradehubIcon } from "./assets/tradehub.svg";

export const Dim = {
  spacing: 24,
  headerHeight: 88,
  collapsedHeaderHeight: 52,
  maxViewWidth: 1280,
};

export const Paths = {
  home: "/",
  features: "/key-features",
  products: "/key-features#products",
  culture: "/our-culture",
  careers: "/our-culture#careers",
  story: "/our-story",
  press: "/press",
  featured: "/featured",
  partners: "/#partners",

  terms_of_use: "/terms-of-use",
  privacy_policy: "/privacy-policy",
  listing_policy: "/listing-policy",
  security_policy: "/security-policy",

  zilswap: "https://zilswap.io/",
  blog: "https://blog.switcheo.network/",
  support: "https://support.switcheo.network/",
  exchange: "https://switcheo.exchange/",
  governance: "https://switcheo.org/governance?net=main",
  staking: "https://app.dem.exchange/stake",
  demex: "https://dem.exchange/",
  foundation: "https://switcheo.foundation/",
  tradescan: "https://switcheo.org",
  swthToken: "https://switcheo.org/token/swth?net=main",
  tradeHub: "https://blog.switcheo.network/introducing-switcheo-tradehub-the-next-evolution-in-decentralized-cross-chain-trading/",
  referral: "https://blog.switcheo.network/switcheo-referral-program-invite-your-friends-get-rewarded/",

  // whitepaper: "https://switcheo.network/whitepaper_v1.pdf",
  api_docs: "docs.switcheo.org",
  tradehub_docs: "docs.switcheo.com", //TODO: change when updated
  demex_docs: "docs.dem.exchange",
  zilswap_docs: "docs.zilswap.org",
  apply_to_list: "https://docs.google.com/forms/d/1Uq01pZvqxG9FtFCpKMZeIT6uhu64VT2BrB2AS1XAXuQ/edit",
  media_kit: "https://switcheo-assets.s3-ap-southeast-1.amazonaws.com/Switcheo_MediaKit_2020.zip",

  social_discord: "https://discord.gg/SPh62Hf",
  social_github: "https://github.com/switcheo",
  social_telegram: "https://t.me/switcheo",
  social_twitter: "https://twitter.com/switcheo",
  social_reddit: "https://www.reddit.com/r/Switcheo/",
  social_medium: "https://medium.com/switcheo",
  social_linkedin: "https://www.linkedin.com/company/switcheo/",
  social_facebook: "https://www.facebook.com/Switcheo/",
  social_youtube: "https://www.youtube.com/channel/UCqZ9sxvw-0UoHzno4-d97oQ/playlists",
};

export const minBlockHeight = `calc(min(50vw, 640px) - ${Dim.spacing * 1.5 + 1}px)`;
export const minProductBlockHeight = `calc(min(50vw, 640px) - ${Dim.spacing * 4 + 1}px)`;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const SendGridAPI = {
  endpoint: "https://app.sgwidget.com/v2/api/newsletter-signup",
  token: "52447a454fad5b9fe4973c939fbae918",
};

export type Feature = {
  label: string;
  description: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  link?: string;
  inverse?: boolean;
};

export const FEATURES: Feature[] = [{
  label: "Build scalable platforms",
  description: "Home to multiple decentralized protocols that disrupt the status-quo. ",
  icon: urlAccountIcon,
}, {
  label: "Design innovative products",
  description: "User-centric, intuitive and seamless products that solve real problems. ",
  icon: urlDecentralizationIcon,
}, {
  label: "Break blockchain barriers",
  description: "Advocates of universal blockchain for personal freedom. Enabling cross-chain communication via Cosmos IBC and Poly Network.",
  icon: urlCrossChainIcon,
}, {
  label: "Champions of decentralization",
  link: Paths.exchange,
  description: "Pursuing high performance applications whilst avoiding pitfalls of centralization. We aim to build fully decentralized products, the way Satoshi intended.",
  icon: urlTradehubIcon,
}];
