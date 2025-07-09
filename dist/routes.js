"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseRoutes = void 0;
const express_1 = require("express");
exports.baseRoutes = (0, express_1.Router)();
exports.baseRoutes.get("/", (_, res) => {
    res.status(200).json("Olá");
});
//# sourceMappingURL=routes.js.map