import { MongoClient } from 'mongodb'

import { Database } from '../lib/types'

const { DB_USER, DB_PASS, DB_CLUSTER } = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  const db = client.db('main')

  return {
    listings: db.collection('test_listings')
  }
}
