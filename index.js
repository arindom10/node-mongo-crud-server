const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// async await
async function run() {}
run().catch((err) => console.log(err));

// user: dbuser2
// pass: I7eeyYlldJpqE86j

const uri =
  "mongodb+srv://dbuser2:I7eeyYlldJpqE86j@cluster0.g5pva2z.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const userCollection = client.db("nodeMongoCrud").collection("users");

    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });
  } finally {
  }
}
run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello from node mongo crud Server");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
