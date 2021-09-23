/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";
import Tweets from "src/utils/testdata/Tweets.json";

const Home: NextPage = ({ blogEntries }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hero />
      <OurVision />
      <Stats />
      <InnovationAreas />
      <Partners />
      <WhoWeAre tweetData={Tweets} />
      <Blog posts={blogEntries} />
      <DeveloperUpdates posts={blogEntries} />
      <JoinUs />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space) {
    throw new Error("process.env.CONTENTFUL_SPACE_ID not set");
  }
  if (!accessToken) {
    throw new Error("process.env.CONTENTFUL_ACCESS_TOKEN not set");
  }

  const client = createClient({ space, accessToken });

  const blogEntryResult = await client.getEntries({
    content_type: "blogEntry",
    order: "-fields.date,sys.createdAt",
    limit: 10,
  });

  const blogEntries = (blogEntryResult.items.map((item) => item.fields));

  return {
    props: {
      blogEntries,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Home;
