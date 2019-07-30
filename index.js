const express = require("express");
const webpush = require("web-push");
const path = require("path");

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

// Body Parser Middleware
app.use(express.json());

const publicVapidKey =
  "BB0Hhc4pARxoilOqnD1IS-JCg7WmE2FUUC2WA1z_Ox5X7zIkbOqy_stWNtnB2WW0vT0BJkvMQjkO5CTNwAgIXug";
const privateVapidKey = "4rLtdvGvKmhjWLMnGH-9yEhtvznvSvZg1tDplKn210s";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
