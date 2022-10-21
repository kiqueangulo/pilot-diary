import diaryData from "./diaries.json"

import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types"

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry

    return restOfDiary
  }

  return undefined
}

export const getEntriesWithoutSentitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...newDiaryEntry,
  }

  diaries.push(newDiary)

  return newDiary
}
