export enum HeaderTab {
  Ecosystem = 0,
  Company = 1,
  Newsroom = 2,
  Developers = 3
}

export interface HeaderTabContent {
  sectionTitle: string
  button: string
  links: HeaderLink[]
}

export interface HeaderLink {
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
}

export interface BlogEntry {
  tag: string;
  title: string;
  preview: string;
  url: string;
}

export interface Tweet {
  id: string
  text: string
  name: string
  username: string
}

export interface JobRole {
  area: string
  title: string
  type: string
  url: string
}