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
exports.UpdateDeliverymanController = void 0;
const UpdateDeliverymanUseCase_1 = require("./UpdateDeliverymanUseCase");
class UpdateDeliverymanController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_deliveryman } = request;
            const { id } = request.params;
            const id_delivery = parseInt(id);
            const updateDeliverymanUseCase = new UpdateDeliverymanUseCase_1.UpdateDeliverymanUseCase();
            const delivery = yield updateDeliverymanUseCase.execute({ id_delivery, id_deliveryman });
            return response.json(delivery);
        });
    }
}
exports.UpdateDeliverymanController = UpdateDeliverymanController;
