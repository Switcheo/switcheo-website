import { createClient } from "contentful";
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import { NextSeo } from "next-seo";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";
import Tweets from "src/utils/testdata/Tweets.json";

const Careers: NextPage = ({ origin, jobRoles }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="Careers: Join Our Team | Switcheo Labs"
        description="Want to have a hand in nurturing a decentralized future powered by the blockchain? Explore our current openings at Switcheo Labs."
        canonical={origin + "/careers"}
        openGraph={{
          url: origin,
          title: "Careers: Join Our Team | Switcheo Labs",
          description: "Want to have a hand in nurturing a decentralized future powered by the blockchain? Explore our current openings at Switcheo Labs.",
          images: [{
            url: `${origin}/assets/switcheo-finance-without-limits.png`,
          }],
        }}
      />
      <CareersHero />
      <AtSwitcheoLabs />
      <OurCulture />
      <JoinNow />
      <WhatOthersSay tweets={Tweets} />
      <OpenRoles jobRoles={jobRoles} />
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

  const jobOpeningResult = await client.getEntries({
    content_type: "jobOpening",
    order: "fields.order,sys.createdAt",
    limit: 100,
  });

  const jobRoles = (jobOpeningResult.items.map((item) => item.fields));

  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
      jobRoles,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Careers;
