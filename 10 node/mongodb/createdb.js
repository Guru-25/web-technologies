const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'mydb';

// Create a new MongoClient
const client = new MongoClient(url);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to MongoDB');

    // Create a new database
    const db = client.db(dbName);
    console.log(`Database created: ${dbName}`);
  } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main().catch(console.error);