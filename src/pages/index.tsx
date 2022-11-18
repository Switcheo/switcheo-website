import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Blog, DeveloperUpdates, Hero, InnovationAreas, JoinUs, OurVision, Partners, Stats, WhoWeAre } from "src/components/Home";
import ContentfulQuerier, { blogEntryQuerier, tweetsQuerier } from "src/utils/contentful";
import { BlogEntry } from "src/utils/types";

const Home: NextPage = ({ blogEntries, tweets, updatesEntries }: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Switcheo Labs: Blockchain Innovation & Infrastructure"
        description="Switcheo Labs is an experimental think tank and cutting-edge software development lab that focuses on cultivating the foundations of a new, decentralized world."
        canonical="https://www.switcheo.com"
        openGraph={{
          url: "https://www.switcheo.com",
          title: "Switcheo Labs: Blockchain Innovation & Infrastructure",
          description: "Switcheo Labs is an experimental think tank and cutting-edge software development lab that focuses on cultivating the foundations of a new, decentralized world.",
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
  const blogEntryResult = await blogEntryQuerier.fetch({ limit: 100 });
  const tweetResult = await tweetsQuerier.fetch({ limit: 10 });

  //TODO: Make a section for Update Entries on Contentful
  const blogEntries = (blogEntryResult.items.map((item: ContentfulQuerier.EntryCollection) => item.fields)).filter((o: BlogEntry) => !o?.title?.includes("Update"));
  const updatesEntries = (blogEntryResult.items.map((item: ContentfulQuerier.EntryCollection) => item.fields).filter((o: BlogEntry) => o?.title?.includes("Update")));
  const tweets = (tweetResult.items.map((item: ContentfulQuerier.EntryCollection) => item.fields));

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
