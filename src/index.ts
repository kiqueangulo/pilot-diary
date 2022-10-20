import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  console.log("Testing endpoint successful");
  res.send("pong");
});

const PORT = 5050;

app.listen(PORT, () => console.table({ server: "ACTIVE", port: PORT }));
