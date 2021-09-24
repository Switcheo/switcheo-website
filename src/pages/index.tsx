/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";
import Tweets from "src/utils/testdata/Tweets.json";

const Home: NextPage = ({ blogEntries }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Switcheo Labs: Blockchain Innovation & Infrastructure</title>
        <meta name="description" content="Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{WEBSITE_URL}}" />
        <meta property="og:title" content="Switcheo Labs: Blockchain Innovation & Infrastructure" />
        <meta property="og:description" content="Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust." />
        <meta property="og:image" content="{{WEBSITE_URL}}/assets/switcheo-finance-without-limits.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="{{WEBSITE_URL}}" />
        <meta property="twitter:title" content="Switcheo Labs: Blockchain Innovation & Infrastructure" />
        <meta property="twitter:description" content="Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust." />
        <meta property="twitter:image" content="{{WEBSITE_URL}}/assets/switcheo-finance-without-limits.png" />
      </Head>
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
