import diaryData from "./diaries.json";

import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number): DiaryEntry | undefined => {
  return diaries.find((diary) => diary.id === id);
};

export const getEntriesWithoutSentitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });
  };

export const addEntry = (): null => null;
