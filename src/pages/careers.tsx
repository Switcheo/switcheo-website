import { createClient } from "contentful";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";
import Tweets from "src/utils/testdata/Tweets.json";

const Careers: NextPage = ({ jobRoles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Careers: Join Our Team | Switcheo Labs</title>
        <meta name="description" content="Want to have a hand in nurturing a decentralised future powered by the blockchain? Explore our current openings at Switcheo Labs." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{WEBSITE_URL}}" />
        <meta property="og:title" content="Careers: Join Our Team | Switcheo Labs" />
        <meta property="og:description" content="Want to have a hand in nurturing a decentralised future powered by the blockchain? Explore our current openings at Switcheo Labs." />
        <meta property="og:image" content="{{WEBSITE_URL}}/assets/switcheo-finance-without-limits.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="{{WEBSITE_URL}}" />
        <meta property="twitter:title" content="Careers: Join Our Team | Switcheo Labs" />
        <meta property="twitter:description" content="Want to have a hand in nurturing a decentralised future powered by the blockchain? Explore our current openings at Switcheo Labs." />
        <meta property="twitter:image" content="{{WEBSITE_URL}}/assets/switcheo-finance-without-limits.png" />
      </Head>
      <CareersHero />
      <AtSwitcheoLabs />
      <OurCulture />
      <JoinNow />
      <WhatOthersSay tweets={Tweets} />
      <OpenRoles jobRoles={jobRoles} />
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

  const jobOpeningResult = await client.getEntries({
    content_type: "jobOpening",
    order: "fields.order,sys.createdAt",
    limit: 100,
  });

  const jobRoles = (jobOpeningResult.items.map((item) => item.fields));

  return {
    props: {
      jobRoles,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Careers;
