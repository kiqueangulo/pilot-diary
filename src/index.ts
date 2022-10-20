import express from "express";

import diaryRouter from "./routes/diaries";

const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("Testing endpoint successful");
  res.send("pong");
});

app.use("/api/v1/diaries", diaryRouter);

const PORT = 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
