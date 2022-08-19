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
exports.CreateDeliveryController = void 0;
const CreateDeliveryUseCase_1 = require("./CreateDeliveryUseCase");
class CreateDeliveryController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { item_name } = request.body;
            const { id_client } = request;
            const createDeliveryUseCase = new CreateDeliveryUseCase_1.CreateDeliveryUseCase();
            const delivery = yield createDeliveryUseCase.execute({ id_client, item_name });
            return response.json(delivery);
        });
    }
}
exports.CreateDeliveryController = CreateDeliveryController;
