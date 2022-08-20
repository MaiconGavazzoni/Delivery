"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("../route/routes");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
//Mensagem de erro customizada
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: 'Internal server error',
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
