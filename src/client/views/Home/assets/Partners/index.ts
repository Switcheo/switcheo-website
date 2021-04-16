import { default as DacmSVG } from "./DACM.svg";
import { default as DefiSVG } from "./DeFiCapital.svg";
import { default as DefianceSVG } from "./DeFianceCapital.svg";
import { default as DuskSVG } from "./DUSK.svg";
import { default as EverstakeSVG } from "./Everstake.svg";
import { default as HoubiPoolSVG } from "./HoubiPool.svg";
import { default as NeoSVG } from "./neo.svg";
import { default as PolyNetworkSVG } from "./PolyNetwork.svg";
import { default as ThreeArrowsSVG } from "./ThreeArrowCapital.svg";
import { default as ZilliqaSVG } from "./Zilliqa.svg";
import { default as O3LabsSVG } from "./O3Labs.svg";
import { default as NGCSVG } from "./NGC.svg";
import { default as stakeWithUsSVG } from "./stakewithus.svg";


type PARTNER = {
    logo: string;
    name: string;
  }
  
  const PARTNERS: PARTNER[] = [
    {
      logo: ThreeArrowsSVG,
      name: "Three Arrows Capital"
    },
    {
      logo: DefianceSVG,
      name: "Definance Capital"
    },
    {
      logo: NGCSVG,
      name: "NGC"
    },
    {
        logo: NeoSVG,
        name: "Neo"
    },
    {
      logo: ZilliqaSVG,
      name: "Zilliqa"
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
      logo: PolyNetworkSVG,
      name: "Poly Network"
    },
    {
      logo: DuskSVG,
      name: "Dusk Network"
    },
    {
      logo: HoubiPoolSVG,
      name: "Houbi Pool"
    },
    {
      logo: stakeWithUsSVG,
      name: "Stake with us"
    },
    {
      logo: EverstakeSVG,
      name: "EverStake"
    },
    {
      logo: O3LabsSVG,
      name: "O3 Labs"
    },
  ]

  export default PARTNERS