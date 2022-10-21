import diaryData from "./diaries.json";

import { DiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getEntriesWithoutSentitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => diaries;

export const addEntry = (): null => null;
