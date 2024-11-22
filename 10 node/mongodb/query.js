const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

const client = new MongoClient(url);

async function queryDatabase() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const collection = db.collection('students');

    const documents = await collection.find({}).toArray();
    console.log('Documents found:', documents);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

queryDatabase().catch(console.error);