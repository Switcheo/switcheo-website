/* eslint-disable @typescript-eslint/no-explicit-any */
export enum HeaderTab {
  Ecosystem = 0,
  Company = 1,
  Newsroom = 2,
  Developers = 3,
  Contact = 4
}

export interface HeaderTabContent {
  tab: HeaderTab
  tabTitle: string
  url?: string
  sectionTitle: string
  button: string
  links: HeaderLink[]
}

export interface HeaderLink {
  title: string
  description: string
  icon: any
  url: string
}

export enum InnovationArea {
  DecentralizedInfrastructures = 0,
  InnovativeDApps = 1,
  WhiteSpaces = 2,
}

export interface InnovationAreaContent {
  area: InnovationArea
  title: string
  icon: any
  background: any
  description: string
  products: Product[]
}

export interface Product {
  icon: any
  name: string
  url: string
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