import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { NextSeo } from "next-seo";
import { AtSwitcheoLabs, CareersHero, JoinNow, OpenRoles, OurCulture, WhatOthersSay } from "src/components/Careers";
import ContentfulQuerier, { jobOpeningQuerier, tweetsQuerier } from "src/utils/contentful";

const Careers: NextPage = ({ jobRoles, tweets }: InferGetServerSidePropsType<GetServerSideProps>) => {
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
            url: "https://switcheo-assets.s3.ap-southeast-1.amazonaws.com/switcheo-finance-without-limits.png",
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
  const jobOpeningResult = await jobOpeningQuerier.fetch({ limit: 100 });

  const tweetResult = await tweetsQuerier.fetch({ limit: 10 });

  const jobRoles = (jobOpeningResult.items.map((item: ContentfulQuerier.EntryCollection) => item.fields));
  const tweets = (tweetResult.items.map((item: ContentfulQuerier.EntryCollection) => item.fields));

  return {
    props: {
      jobRoles,
      tweets,
      revalidate: process.env.CONTENTFUL_TTL ?? 15,
    },
  };
};

export default Careers;
