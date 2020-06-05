import Contentful from "contentful";
import actions from "../../../client/store/actions";
import ServerStore from "../../store";
const contentful = require("contentful");

let _client: Contentful.ContentfulClientApi | null = null;

const getClient = (): Contentful.ContentfulClientApi => {
  if (_client === null)
    throw new Error("not initialized");
  return _client!;
};



export const init = (): void => {
  if (!process.env.CONTENTFUL_SPACE_ID)
    throw new Error("process.env.CONTENTFUL_SPACE_ID not set");
  if (!process.env.CONTENTFUL_ACCESS_TOKEN)
    throw new Error("process.env.CONTENTFUL_ACCESS_TOKEN not set");

  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  _client = contentful.createClient({ space, accessToken });
};

const extractValues = (items: Contentful.Entry<any>[]) => {
  return items.map(item => item.fields);
}
export const loadAll = async (): Promise<{ [index: string]: any }> => {
  const client = getClient();
  const output: { [index: string]: any } = {};
  const pressResult = await client.getEntries({
    content_type: "pressEntry",
    limit: 100,
  });
  const teamResult = await client.getEntries({
    content_type: "team",
    order: "fields.order,sys.createdAt",
    limit: 100,
  });
  const featuredInResult = await client.getEntries({
    content_type: "featuredIn",
    order: "sys.createdAt",
    limit: 20,
  });
  const blogEntryResult = await client.getEntries({
    content_type: "blogEntry",
    order: "-fields.date,sys.createdAt",
    limit: 4,
  });
  const jobOpeningResult = await client.getEntries({
    content_type: "jobOpening",
    order: "fields.order,sys.createdAt",
    limit: 100,
  });

  output.press = extractValues(pressResult.items);
  output.featuredIn = extractValues(featuredInResult.items);
  output.blogEntry = extractValues(blogEntryResult.items);
  output.jobOpening = extractValues(jobOpeningResult.items);
  output.team = extractValues(teamResult.items).map(teamMember => ({
    ...teamMember,
    ...teamMember.links && {
      links: extractValues(teamMember.links),
    },
    ...teamMember.image && {
      image: teamMember.image.fields,
    },
  }));

  return output;
};

export const reloadCache = async () => {
  console.log("reloading content cache");
  const result = await loadAll();
  for (const key in result) {
    const action = actions.Content.update({ key, value: result[key] });
    ServerStore.dispatch(action);
  }
};