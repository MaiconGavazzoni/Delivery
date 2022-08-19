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
exports.FindAllDeliveriesDeliverymanController = void 0;
const FindAllDeliveriesDeliverymanUseCase_1 = require("./FindAllDeliveriesDeliverymanUseCase");
class FindAllDeliveriesDeliverymanController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_deliveryman } = request;
            const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase_1.FindAllDeliveriesDeliverymanUseCase();
            const deliveries = yield findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman);
            return response.json(deliveries);
        });
    }
}
exports.FindAllDeliveriesDeliverymanController = FindAllDeliveriesDeliverymanController;
