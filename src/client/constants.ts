
import urlAccountIcon from "./assets/account.svg";
import urlCrossChainIcon from "./assets/cross-chain.svg";
import urlDecentralizationIcon from "./assets/decentralization.svg";
import urlSwitcheoChainIcon from "./assets/switcheo-chain.svg";
import urlTradehubIcon from "./assets/tradehub.svg";
import urlWalletIntegrationsIcon from "./assets/wallet-integrations.svg";

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

  terms_of_use: "/terms-of-use",
  privacy_policy: "/privacy-policy",
  listing_policy: "/listing-policy",
  security_policy: "/security-policy",

  blog: "https://blog.switcheo.network/",
  support: "https://support.switcheo.network/",
  exchange: "https://switcheo.exchange/",
  foundation: "https://switcheo.foundation/",
  referral: "https://blog.switcheo.network/switcheo-referral-program-invite-your-friends-get-rewarded/",

  // whitepaper: "https://switcheo.network/whitepaper_v1.pdf",
  api_docs: "https://docs.switcheo.network/",
  apply_to_list: "https://docs.google.com/forms/d/1Uq01pZvqxG9FtFCpKMZeIT6uhu64VT2BrB2AS1XAXuQ/edit",
  media_kit: "https://switcheo-assets.s3-ap-southeast-1.amazonaws.com/Switcheo_MediaKit_2020.zip",

  social_github: "https://github.com/switcheo",
  social_telegram: "https://t.me/switcheo",
  social_twitter: "https://twitter.com/switcheonetwork",
  social_reddit: "https://www.reddit.com/r/Switcheo/",
  social_medium: "https://medium.com/switcheo",
  social_linkedin: "https://www.linkedin.com/company/switcheonetwork/",
  social_facebook: "https://www.facebook.com/SwitcheoExchange/",
  social_youtube: "https://www.youtube.com/channel/UCqZ9sxvw-0UoHzno4-d97oQ/playlists",
};

export const minBlockHeight = `calc(min(50vw, 640px) - ${Dim.spacing * 1.5 + 1}px)`;
export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const SendGridAPI = {
  endpoint: "https://app.sgwidget.com/v2/api/newsletter-signup",
  token: "52447a454fad5b9fe4973c939fbae918",
};

export type Feature = {
  label: string;
  descriptors: string[];
  description: string;
  icon: string;
  link?: string;
  inverse?: boolean;
};

export const FEATURES: Feature[] = [{
  label: "Instant Onboarding",
  descriptors: ["Simple", "Familiar", "Fast"],
  description: "For existing crypto lovers, trade by simply connecting your wallet. For new explorers, just sign up with your email, so that Switcheo can generate a non-custodial wallet for you.",
  icon: urlAccountIcon,
}, {
  label: "True Decentralization",
  descriptors: ["Unstoppable", "Secure", "Self-hodl"],
  description: "Switcheo is an actual DEX. User funds are protected and secured by audited smart contracts. With the highest security standards in this industry, your funds never leave your control.",
  icon: urlDecentralizationIcon,
}, {
  label: "Cross-chain Trading",
  descriptors: ["Atomic Swaps", "Encompassing", "Liquid Orderbook"],
  description: "Trading on Switcheo is instant. Users are able to trade across blockchains using our novel combination of Atomic Swaps and Automated Market Makers.",
  icon: urlCrossChainIcon,
}, {
  label: "Switcheo TradeHub",
  link: Paths.exchange,
  descriptors: ["Fast Settlement", "Instant Execution", "Minimal Fees"],
  description: "Switcheo TradeHub is the next evolution in decentralized cross-chain trading built on top of Tendermint Core. ",
  icon: urlTradehubIcon,
}, {
  label: "Wallet Integrations",
  descriptors: ["Extensive Coverage", "Community-driven", "Privacy-Preserving"],
  description: "Switcheo Exchange is integrated with multiple third-party wallets, bringing you complete privacy without sacrificing convenience. Trade immediately through your open-source or community-built wallet.",
  icon: urlWalletIntegrationsIcon,
}, {
  label: "Open Market Protocol",
  descriptors: ["Margin & Derivatives", "Market Creator", "Liquidity Pools"],
  description: "Switcheo TradeHub will allow any market to be created by anyone. Markets can be simple spot markets or derivatives of any underlying asset. Liquidity Pools and Automated Market Makers ensure liquidity in all created markets.",
  icon: urlSwitcheoChainIcon,
}];