import Contentful from "contentful";
const contentful = require("contentful");

let _client: Contentful.ContentfulClientApi | null = null;

const getClient = (): Contentful.ContentfulClientApi => {
  if (_client === null)
    throw new Error("not initialized");
  return _client!;
};



export const init = (): void => {
  const space = "mozptkzollhw";
  const accessToken = "fd3FVfxoOR7KmHpvMzWfgiveirmjYxHgzVIoMI6XyP8";

  // if (!process.env.CONTENTFUL_SPACE_ID)
  //   throw new Error("process.env.CONTENTFUL_SPACE_ID not set");
  // if (!process.env.CONTENTFUL_ACCESS_TOKEN)
  //   throw new Error("process.env.CONTENTFUL_ACCESS_TOKEN not set");

  // const space = process.env.CONTENTFUL_SPACE_ID!;
  // const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

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

  output.press = extractValues(pressResult.items);
  output.team = extractValues(teamResult.items).map(teamMember => ({
    ...teamMember,
    links: extractValues(teamMember.links),
    ...teamMember.image && {
      image: teamMember.image.fields,
    },
  }));

  return output;
};