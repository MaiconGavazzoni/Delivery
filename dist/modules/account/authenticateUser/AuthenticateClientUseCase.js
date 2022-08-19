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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateClientUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../database/prismaClient");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateClientUseCase {
    execute({ password, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield prismaClient_1.prisma.clients.findFirst({
                where: {
                    username: username,
                }
            });
            if (!client) {
                throw new Error("Usuario ou senha incorreto.");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, client.password);
            if (!passwordMatch) {
                throw new Error("Usuario ou senha incorreto.");
            }
            const token = (0, jsonwebtoken_1.sign)({ username }, process.env.SECRET_TOKEN_CLIENT || "", {
                subject: client.id.toString(),
                expiresIn: "1d",
            });
            return {
                client: {
                    username: username,
                },
                token,
            };
        });
    }
}
exports.AuthenticateClientUseCase = AuthenticateClientUseCase;
