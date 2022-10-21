import { NewDiaryEntry, Weather } from "./types"

const isString = (string: any): boolean =>
  typeof string === "string" || string instanceof String ? true : false

const isDate = (date: any): boolean => {
  if (!isString(date)) throw new Error("Incorrect or missing comment.")

  return Boolean(Date.parse(date))
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) throw new Error("Incorrect or missing comment.")

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest))
    throw new Error("Incorrect or missing date.")

  return dateFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
  }

  return newEntry
}

export default toNewDiaryEntry
