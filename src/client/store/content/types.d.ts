export type Press = {
  title: string;
  link: string;
  date?: string;
  type: string;
};
export type TeamMember = {
  name: string;
  role: string;
  team: string;
  links: any[];
  image: any;
};
export type FeaturedIn = {
  title: string;
  link: string;
};
export type BlogEntry = {
  title: string;
  preview: string;
  date: string;
  url: string;
};
export type JobOpening = {
  role: string;
  url: string;
};

export type ContentState = {
  timestamp?: moment.Moment;
  press: Press[];
  team: TeamMember[];
  blogEntry: BlogEntry[];
  featuredIn: FeaturedIn[];
  jobOpening: JobOpening[];
};
export type ContentUpdateProps = {
  key: string;
  value: any;
};