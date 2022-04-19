import { createClient } from "contentful";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";

const Home: NextPage = ({ blogEntries,tweets,updatesEntries }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Switcheo Labs: Blockchain Innovation & Infrastructure"
        description="Switcheo Labs is a creative and experimental think tank that nurtures ecosystems which form the foundations of a new decentralized world."
        canonical="https://www.switcheo.com"
        openGraph={{
          url: "https://www.switcheo.com",
          title: "Switcheo Labs: Blockchain Innovation & Infrastructure",
          description: "Switcheo Labs is a creative and experimental think tank that nurtures ecosystems which form the foundations of a new decentralized world.",
          images: [{
            url: "https://switcheo-assets.s3.ap-southeast-1.amazonaws.com/switcheo-finance-without-limits.png",
          }],
        }}
      />
      <Hero />
      <OurVision />
      <Stats />
      <InnovationAreas />
      <Partners />
      <WhoWeAre tweets={tweets} />
      <Blog posts={blogEntries} />
      <DeveloperUpdates posts={updatesEntries} />
      <JoinUs />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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

  //TODO: Make a section for Update Entries on Contentful
  const updates = await client.getEntries({
    content_type: "blogEntry",
    order: "-fields.date,sys.createdAt",
    limit: 100,
  });

  const tweetResult = await client.getEntries({
    content_type: "switcheoLabTweets",
    limit: 10,
  });

  const blogEntries = (blogEntryResult.items.map((item) => item.fields));
  const updatesEntries = (updates.items.map((item) => item.fields).filter((o:any) => o?.title?.includes('Update')));
  const tweets = (tweetResult.items.map((item) => item.fields));

  return {
    props: {
      blogEntries,
      tweets,
      updatesEntries,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Home;
