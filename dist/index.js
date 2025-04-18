"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import app from "./app";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'https://andres101010.github.io/portafolio-front/', 'https://andres101010.github.io'],
    methods: ['GET', 'POST', 'OPTIONS'],
}));
app.use(routes_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Puerto corriendo en:", PORT);
});
