import { MongoClient, ServerApiVersion } from "mongodb"

export default async function db() {
  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })
  await client.connect()
  return client.db(process.env.MONGODB_DB_NAME)
}