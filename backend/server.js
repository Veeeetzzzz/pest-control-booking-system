/*
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB URI and MongoClient setup
const uri = "your-mongodb-connection-string"; // Replace with your actual connection string
const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Async function to check MongoDB connection
async function checkMongoDBConnection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Could not connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

// Call the MongoDB connection check function
checkMongoDBConnection();

// Define a simple route to test our backend
app.get('/', (req, res) => res.send('Hello World!'));

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
*/
