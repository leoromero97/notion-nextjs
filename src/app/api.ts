import { Client } from "@notionhq/client";
import {
  GetPageResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
export const DATABASE_ID = "1198bacdd9d7809b80afd760b8c182c3";

export const api = {
  getObjectByDatabase: async (): Promise<QueryDatabaseResponse> => {
    const query = await notion.databases.query({ database_id: DATABASE_ID });
    return query;
  },
  getDataPageById: async (pageId: string): Promise<GetPageResponse> => {
    const query = await notion.pages.retrieve({ page_id: pageId });
    return query;
  },
};
