import React from "react";
import { default as BoltSVG } from "./Partners_Bolt.svg";
import { default as DacmSVG } from "./Partners_DACM.svg";
import { default as DefiSVG } from "./Partners_DeFi.svg";
import { default as DefinanceSVG } from "./Partners_DeFinance.svg";
import { default as DuskSVG } from "./Partners_Dusk.svg";
import { default as NeoSVG } from "./Partners_Neo.svg";
import { default as PolyNetworkSVG } from "./Partners_PolyNetwork.svg";
import { default as ThreeArrowsSVG } from "./Partners_ThreeArrows.svg";
import { default as ZilliqaSVG } from "./Partners_Zilliqa.svg";

type PARTNER = {
    logo: string;
    name: string;
}

const PARTNERS: PARTNER[] = [
    {
      logo: BoltSVG,
      name: "Bolt"
    },
    {
      logo: DacmSVG,
      name: "Digital Assets Capital"
    },
    {
      logo: DefiSVG,
      name: "DeFi Capital"
    },
    {
      logo: DefinanceSVG,
      name: "Definance Capital"
    },
    {
      logo: DuskSVG,
      name: "Dusk Network"
    },
    {
      logo: NeoSVG,
      name: "Neo"
    },
    {
      logo: PolyNetworkSVG,
      name: "Poly Network"
    },
    {
        logo: ZilliqaSVG,
        name: "Zilliqa"
    },
    {
      logo: ThreeArrowsSVG,
      name: "Three Arrows Capital"
    },
  ]

  export default PARTNERS