import type { NextPage } from "next";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";
import Tweets from "src/utils/testdata/Tweets.json";
import JobRoles from "src/utils/testdata/JobRoles.json";

const Careers: NextPage = () => {
  return (
    <>
      <CareersHero />
      <AtSwitcheoLabs />
      <OurCulture />
      <JoinNow />
      <WhatOthersSay tweets={Tweets} />
      <OpenRoles jobRoles={JobRoles} />
    </>
  );
};

export default Careers;
