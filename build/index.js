"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_routes_1 = __importDefault(require("./routes/diaries.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/ping", (_req, res) => {
    console.log("Testing endpoint successful");
    res.send("pong");
});
app.use("/api/v1/diaries", diaries_routes_1.default);
const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
