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
exports.UpdateEndDateUseCase = void 0;
const prismaClient_1 = require("../../../../database/prismaClient");
class UpdateEndDateUseCase {
    execute({ id_delivery, id_deliveryman }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prismaClient_1.prisma.deliveries.updateMany({
                where: {
                    id: id_delivery,
                    id_deliveryman
                },
                data: {
                    end_at: new Date(),
                }
            });
            return result;
        });
    }
}
exports.UpdateEndDateUseCase = UpdateEndDateUseCase;
