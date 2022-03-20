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
exports.version = void 0;
const util_1 = require("util");
const package_json_1 = __importDefault(require("../../package.json"));
const chalk_1 = __importDefault(require("chalk"));
const figlet = (0, util_1.promisify)(require('figlet'));
const log = (type, msg) => {
    if (type === 'success') {
        console.log(chalk_1.default.green(msg));
    }
    if (type === 'error') {
        console.log(chalk_1.default.red(msg));
    }
};
const version = () => __awaiter(void 0, void 0, void 0, function* () {
    const info = yield figlet(`${package_json_1.default.name}`);
    log('success', `${info}  ${package_json_1.default.version}`);
});
exports.version = version;
