import fetch from "node-fetch";

interface QueryArgs {
  limit?: number;
}

class ContentfulQuerier {
  private environment: string = "master";

  private data: any;
  private timestamp: number = 0;

  constructor(
    readonly contentType: string,
    readonly order?: string,
  ) {

  }

  public async reload(args: QueryArgs) {
    const query = [
      "limit=" + (args.limit ?? 100)
    ];
    if (this.order)
      query.push("order=" + this.order);

    const url = `https://content.carbon.network/contentful/${this.environment}/${this.contentType}?${query.join("&")}`;
    console.log("invoking contentful querier", url);
    const response = await fetch(url);
    return response.json();
  }

  public async fetch(args: QueryArgs = {}): Promise<any> {
    const currentTimestamp = new Date().getTime();
    if (!this.data || currentTimestamp - this.timestamp > 900000) {
      this.data = await this.reload(args);

      this.timestamp = currentTimestamp;
    }

    return this.data;
  }

  public getEnvironment() {
    return this.environment;
  }
}

namespace ContentfulQuerier {
  export interface Response {
    items: EntryCollection[]
  }
  export interface EntryCollection {
    fields: any[]
  }
}

export default ContentfulQuerier;


export const blogEntryQuerier = new ContentfulQuerier("blogEntry", "-fields.date,sys.createdAt");
export const jobOpeningQuerier = new ContentfulQuerier("jobOpening", "fields.order,sys.createdAt");
export const tweetsQuerier = new ContentfulQuerier("switcheoLabTweets");
