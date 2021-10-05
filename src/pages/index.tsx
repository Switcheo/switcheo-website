import { createClient } from "contentful";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";

const Home: NextPage = ({ blogEntries, tweets }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Switcheo Labs: Blockchain Innovation & Infrastructure"
        description="Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust."
        canonical="https://www.switcheo.com"
        openGraph={{
          url: "https://www.switcheo.com",
          title: "Switcheo Labs: Blockchain Innovation & Infrastructure",
          description: "Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust.",
          images: [{
            url: "https://www.switcheo.com/assets/switcheo-finance-without-limits.png",
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
      <DeveloperUpdates posts={blogEntries} />
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

  const tweetResult = await client.getEntries({
    content_type: "switcheoLabTweets",
    limit: 3,
  });

  const blogEntries = (blogEntryResult.items.map((item) => item.fields));
  const tweets = (tweetResult.items.map((item) => item.fields));

  return {
    props: {
      blogEntries,
      tweets,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Home;
