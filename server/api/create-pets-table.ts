// https://vercel.com/docs/storage/vercel-postgres/quickstart#create-a-table-in-your-database

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "@vercel/postgres";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    // TODO: 总不可能在这里新建表吧。 看看后续的 ORM 怎么维护数据库表。
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}
