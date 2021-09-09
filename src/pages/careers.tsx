import type { NextPage } from "next";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";

const Careers: NextPage = () => {
  return (
    <>
      <CareersHero />
      <AtSwitcheoLabs />
      <OurCulture />
      <JoinNow />
      <WhatOthersSay />
      <OpenRoles />
    </>
  );
};

export default Careers;
