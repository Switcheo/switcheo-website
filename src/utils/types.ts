/* eslint-disable @typescript-eslint/no-explicit-any */
export interface HeaderTabContent {
  tabTitle: string
  url?: string
  sectionTitle?: string
  button?: string
  links?: HeaderLink[]
}

export interface HeaderLink {
  title: string
  description: string
  icon?: any
  url: string
}

export interface InnovationAreaContent {
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
  // tag: string
  title: string
  preview: string
  url: string
}

export interface Tweet {
  name: string
  tweet: string
  tweetUrl: string
  twitterHandle: string
  userProfilePictureUrl: string
}

export interface JobRole {
  category: string
  role: string
  extra: string
  url: string
}