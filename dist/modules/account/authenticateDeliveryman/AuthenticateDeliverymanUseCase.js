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
exports.AuthenticateDeliverymanUseCase = void 0;
const bcrypt_1 = require("bcrypt");
const prismaClient_1 = require("../../../database/prismaClient");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthenticateDeliverymanUseCase {
    execute({ password, username }) {
        return __awaiter(this, void 0, void 0, function* () {
            const deliveryman = yield prismaClient_1.prisma.deliveryman.findFirst({
                where: {
                    username: username,
                }
            });
            if (!deliveryman) {
                throw new Error("Entregador ou senha incorreto.");
            }
            const passwordMatch = yield (0, bcrypt_1.compare)(password, deliveryman.password);
            if (!passwordMatch) {
                throw new Error("Entregador ou senha incorreto.");
            }
            const token = (0, jsonwebtoken_1.sign)({ username }, process.env.SECRET_TOKEN_DELIVERYMAN || "", {
                subject: deliveryman.id.toString(),
                expiresIn: "1d",
            });
            return {
                deliveryman: {
                    username: username,
                },
                token,
            };
        });
    }
}
exports.AuthenticateDeliverymanUseCase = AuthenticateDeliverymanUseCase;
