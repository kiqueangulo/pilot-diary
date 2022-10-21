import express from "express"

import * as diaryService from "../services/diary.service"

const router = express.Router()

router.get("/", (_req, res) => {
  res.send(diaryService.getEntriesWithoutSentitiveInfo())
})

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(+req.params.id)

  return diary ? res.send(diary) : res.sendStatus(404)
})

router.post("/", (req, res) => {
  const { date, weather, visibility, comment } = req.body

  const newDiaryEntry = diaryService.addEntry(date, weather, visibility, comment)

  res.json(newDiaryEntry)
})

export default router
