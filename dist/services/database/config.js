"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class dbConecction {
    constructor() {
        this.mongo_key = process.env.MONGO || "";
    }
    conexion() {
        try {
            mongoose_1.default.connect(this.mongo_key);
            console.log('Base de datos conectada');
        }
        catch (error) {
            console.log(error);
            throw new Error('Error en la base de datos');
        }
    }
}
exports.default = dbConecction;
//# sourceMappingURL=config.js.map