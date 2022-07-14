"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMunicipio = void 0;
const express_1 = require("express");
const getMunicipio = (req, res = express_1.response) => {
    res.json({
        msg: 'get Municipio'
    });
};
exports.getMunicipio = getMunicipio;
//# sourceMappingURL=controller.js.map