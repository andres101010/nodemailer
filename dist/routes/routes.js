"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitud_controllers_1 = __importDefault(require("../controllers/solicitud.controllers"));
const router = (0, express_1.Router)();
router.post('/contacto/crear-solicitud', solicitud_controllers_1.default);
exports.default = router;
