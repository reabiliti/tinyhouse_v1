import { MongoClient } from 'mongodb'

const { DB_USER, DB_PASS, DB_CLUSTER } = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true })

  const db = client.db('main')

  return {
    listings: db.collection('test_listings')
  }
}


