// backend/db.js
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

let db; // Variable to store the database instance

// Function to connect to MongoDB
async function connectToDB() {
  const client = new MongoClient(uri);
  await client.connect();
  console.log("Connected to MongoDB!");
  db = client.db("sooperstudies"); // Name of your database
}

// Function to get the database instance
function getDB() {
  if (!db) {
    throw new Error("Database not connected!");
  }
  return db;
}

// Export functions
module.exports = { connectToDB, getDB };
