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


export type ContentState = {
  timestamp?: moment.Moment;
  press: Press[];
  team: TeamMember[];
};
export type ContentUpdateProps = {
  key: string;
  value: any;
};