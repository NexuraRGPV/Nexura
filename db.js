

const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/nexura"; // Change db name if needed

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "❌ Connection error:"));
db.once("open", () => console.log("✅ Connected to MongoDB"));

module.exports = db;
