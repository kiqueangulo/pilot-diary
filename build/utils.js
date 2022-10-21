"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const isString = (param) => typeof param === "string" || param instanceof String ? true : false;
const isDate = (param) => {
    if (!isString(param))
        throw new Error("Incorrect or missing comment.");
    return Boolean(Date.parse(param));
};
const isWeather = (param) => Object.values(enums_1.Weather).includes(param);
const isVisibility = (param) => Object.values(enums_1.Visibility).includes(param);
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest))
        throw new Error("Incorrect or missing comment.");
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest))
        throw new Error("Incorrect or missing date.");
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest))
        throw new Error("Incorrect or missing weather.");
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest))
        throw new Error("Incorrect or missing visibility.");
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
