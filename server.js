const express = require("express");
const client = require("./client");
const axios = require("axios").default;

const app = express();

app.get("/", async (req, res) => {
  const cachedVale = await client.get("todos");
  if (cachedVale) return res.json(JSON.parse(cachedVale));
  
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  await client.set("todos", JSON.stringify(data));
  await client.expire("todos", 30);
  return res.json(data);
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
