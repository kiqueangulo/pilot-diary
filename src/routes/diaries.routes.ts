import express from "express";

import * as diaryService from "../services/diary.service";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithoutSentitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Saving a diary");
});

export default router;
