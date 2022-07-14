"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("../components/municipio/router"));
const config_1 = __importDefault(require("./database/config"));
class Server {
    constructor() {
        this.apiPaths = {
            municipios: '/api/municipio',
            departamento: '.api/departamento'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //conexion base de datos
        this.conectarDB();
        //definicion de rutas
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.municipios, router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
    conectarDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new config_1.default;
            yield db.conexion();
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map