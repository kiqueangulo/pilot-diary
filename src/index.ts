import express from "express";

const app = express();

/** The param req was not being used, thus TS was reaising an error.
 *  If I use underscore before the param, TS ignores it.
 *  I can also use only underscore, for future references.
 */
app.get("/ping", (_req, res) => {
  console.log("Testing endpoint successful");
  res.send("pong");
});

const PORT = 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
