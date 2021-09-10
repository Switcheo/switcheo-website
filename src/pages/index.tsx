import type { NextPage } from "next";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";
import BlogPosts from "src/utils/testdata/BlogPosts.json";
import Tweets from "src/utils/testdata/Tweets.json";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <OurVision />
      <Stats />
      <InnovationAreas />
      <Partners />
      <WhoWeAre tweetData={Tweets} />
      <Blog posts={BlogPosts} />
      <DeveloperUpdates posts={BlogPosts} />
      <JoinUs />
    </>
  );
};

export default Home;