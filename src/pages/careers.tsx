import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";
import Tweets from "src/utils/testdata/Tweets.json";
import { createClient } from "contentful";

const Careers: NextPage = ({ jobRoles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
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
