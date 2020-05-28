
import urlAccountIcon from "./assets/account.svg";
import urlCrossChainIcon from "./assets/cross-chain.svg";
import urlDecentralizationIcon from "./assets/decentralization.svg";
import urlSwitcheoChainIcon from "./assets/switcheo-chain.svg";
import urlTradehubIcon from "./assets/tradehub.svg";
import urlWalletIntegrationsIcon from "./assets/wallet-integrations.svg";

export const Dim = {
  spacing: 24,
  headerHeight: 88,
  mobileHeaderHeight: 64,
  maxViewWidth: 1920,
};

export const Paths = {
  home: "/",
  features: "/key-features",
  products: "/key-features#products",
  culture: "/our-culture",
  story: "/our-story",
  press: "/press",
  featured: "/featured",

  blog: "https://blog.switcheo.network/",
  support: "https://support.switcheo.network/",
  exchange: "https://switcheo.exchange/",
  foundation: "https://switcheo.foundation/",
  referral: "https://blog.switcheo.network/switcheo-referral-program-invite-your-friends-get-rewarded/",

  security: "https://hackerone.com/switcheo_network",
  whitepaper: "https://switcheo.network/whitepaper_v1.pdf",
  api_docs: "https://docs.switcheo.network/",
  apply_to_list: "https://docs.google.com/forms/d/1Uq01pZvqxG9FtFCpKMZeIT6uhu64VT2BrB2AS1XAXuQ/edit",
  media_kit: "https://switcheo.network/switcheo_mediakit.pdf",
  terms_of_use: "https://switcheo.network/terms.html",
  privacy_policy: "https://switcheo.network/privacy.html",
  listing_policy: "https://switcheo.network/listing.html",
};

export const minBlockHeight = `calc(100vh - ${Dim.headerHeight}px - ${Dim.spacing * 2 - 2}px)`;



export type Feature = {
  label: string;
  descriptors: string[];
  description: string;
  icon: string;
  link?: string;
  inverse?: boolean;
};

const DEFAULT_DESC = "Quatem re eatem dolumen et laborectures earcilitae quis accat que vellab is es et ex et ut repersp icature pudaeris digendandam, sinis simus dolorat uress molorun turempo";
export const FEATURES: Feature[] = [{
  label: "Account",
  descriptors: ["Simple", "Familiar"],
  description: DEFAULT_DESC,
  icon: urlAccountIcon,
}, {
  label: "True Decentralization",
  descriptors: ["Unstoppable", "Secure", "Non-custodial"],
  description: DEFAULT_DESC,
  icon: urlDecentralizationIcon,
}, {
  label: "Cross-chain",
  descriptors: ["Atomic Swaps", "Encompassing", "Liquid"],
  description: DEFAULT_DESC,
  icon: urlCrossChainIcon,
}, {
  label: "TradeHub",
  link: Paths.exchange,
  inverse: true,
  descriptors: ["Fast settlement", "Instant execution"],
  description: DEFAULT_DESC,
  icon: urlTradehubIcon,
}, {
  label: "Wallet integrations",
  descriptors: ["Extensive", "Community-driven"],
  description: DEFAULT_DESC,
  icon: urlWalletIntegrationsIcon,
}, {
  label: "SwitcheoChain",
  descriptors: ["Lorem ipsum"],
  description: DEFAULT_DESC,
  icon: urlSwitcheoChainIcon,
}];