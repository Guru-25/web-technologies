const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

const client = new MongoClient(url);

async function insertDocument() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const collection = db.collection('students');

    const result = await collection.insertOne({ name: 'Raja', address: 'IT' });
    console.log('Document inserted:', result.insertedId);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

insertDocument().catch(console.error);