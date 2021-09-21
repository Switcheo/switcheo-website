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
  tag: string
  title: string
  preview: string
  url: string
}

export interface Tweet {
  id: string
  text: string
  name: string
  username: string
  iconHref: string
  url: string
}

export interface JobRole {
  area: string
  title: string
  type: string
  url: string
}