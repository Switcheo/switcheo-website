import type { NextPage } from "next";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <OurVision />
      <Stats />
      <InnovationAreas />
      <Partners />
      <WhoWeAre />
      <Blog />
      <DeveloperUpdates />
      <JoinUs />
    </>
  );
};

export default Home;
