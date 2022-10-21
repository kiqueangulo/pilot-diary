import { NewDiaryEntry } from "./types"
import { Weather, Visibility } from "./enums"

const isString = (param: any): boolean =>
  typeof param === "string" || param instanceof String ? true : false

const isDate = (param: any): boolean => {
  if (!isString(param)) throw new Error("Incorrect or missing comment.")

  return Boolean(Date.parse(param))
}

const isWeather = (param: any): boolean => Object.values(Weather).includes(param)

const isVisibility = (param: any): boolean => Object.values(Visibility).includes(param)

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) throw new Error("Incorrect or missing comment.")

  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest))
    throw new Error("Incorrect or missing date.")

  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest))
    throw new Error("Incorrect or missing weather.")

  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest))
    throw new Error("Incorrect or missing visibility.")

  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  }

  return newEntry
}

export default toNewDiaryEntry
