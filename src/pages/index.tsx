import { createClient } from "contentful";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import { NextSeo } from "next-seo";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";
import Tweets from "src/utils/testdata/Tweets.json";

const Home: NextPage = ({ origin, blogEntries }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Switcheo Labs: Blockchain Innovation & Infrastructure"
        description="Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust."
        canonical={origin}
        openGraph={{
          url: origin,
          title: "Switcheo Labs: Blockchain Innovation & Infrastructure",
          description: "Switcheo Labs is a creative and experimental think tank that bootstraps & nurtures ecosystems moving towards a new world that thrives even without trust.",
          images: [{
            url: `${origin}/assets/switcheo-finance-without-limits.png`,
          }],
        }}
      />
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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

  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
      blogEntries,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Home;
