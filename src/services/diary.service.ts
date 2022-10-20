import diaryData from "./diaries.json";

import { DiaryEntry } from "../types";

/** diaryData was raising an error between its weather(string) and DiaryEntry weather(specific strings).
 * This usually happens with external json where we don't control how the data is comming.
 * To solve this we tell TS not to worry about it and treat it as whatever we we say.
 * In this case "as Array<DiaryEntry>"
 */
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const addEntry = () => null;
