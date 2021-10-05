import { createClient } from "contentful";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";

const Careers: NextPage = ({ jobRoles, tweets }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Careers: Join Our Team | Switcheo Labs"
        description="Want to have a hand in nurturing a decentralized future powered by the blockchain? Explore our current openings at Switcheo Labs."
        canonical="https://www.switcheo.com/careers"
        openGraph={{
          url: "https://www.switcheo.com/careers",
          title: "Careers: Join Our Team | Switcheo Labs",
          description: "Want to have a hand in nurturing a decentralized future powered by the blockchain? Explore our current openings at Switcheo Labs.",
          images: [{
            url: "https://www.switcheo.com/assets/switcheo-finance-without-limits.png",
          }],
        }}
      />
      <CareersHero />
      <AtSwitcheoLabs />
      <OurCulture />
      <JoinNow />
      <WhatOthersSay tweets={tweets} />
      <OpenRoles jobRoles={jobRoles} />
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

  const jobOpeningResult = await client.getEntries({
    content_type: "jobOpening",
    order: "fields.order,sys.createdAt",
    limit: 100,
  });

  const tweetResult = await client.getEntries({
    content_type: "switcheoLabTweets",
    limit: 3,
  });

  const jobRoles = (jobOpeningResult.items.map((item) => item.fields));
  const tweets = (tweetResult.items.map((item) => item.fields));

  return {
    props: {
      jobRoles,
      tweets,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Careers;
