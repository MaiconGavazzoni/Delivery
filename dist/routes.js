"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var ensureAuthenticateCLient_1 = require("./middlewares/ensureAuthenticateCLient");
var ensureAuthenticateDeliveryman_1 = require("./middlewares/ensureAuthenticateDeliveryman");
var AuthenticateDeliverymanController_1 = require("./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController");
var AuthenticateClientController_1 = require("./modules/account/authenticateUser/AuthenticateClientController");
var CreateClientController_1 = require("./modules/clients/useCase/createClient/CreateClientController");
var FindAllDeliveriesController_1 = require("./modules/clients/useCase/deliveries/FindAllDeliveriesController");
var CreateDeliveryController_1 = require("./modules/deliveries/useCases/createDelivery/CreateDeliveryController");
var FindAllAvailableController_1 = require("./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController");
var UpdateDeliverymanController_1 = require("./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController");
var UpdateEndDateController_1 = require("./modules/deliveries/useCases/updateEndDate/UpdateEndDateController");
var CreateDeliverymanController_1 = require("./modules/deliveryman/useCase/createDeliveryman/CreateDeliverymanController");
var FindAllDeliveriesDeliverymanController_1 = require("./modules/deliveryman/useCase/findAllDeliveries/FindAllDeliveriesDeliverymanController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var authenticateClientController = new AuthenticateClientController_1.AuthenticateClientController();
var authenticateDeliverymanController = new AuthenticateDeliverymanController_1.AuthenticateDeliverymanController();
var createClientController = new CreateClientController_1.CreateClientController();
var createDeliverymanController = new CreateDeliverymanController_1.CreateDeliverymanController();
var createDeliveryController = new CreateDeliveryController_1.CreateDeliveryController();
var findAllAvailableController = new FindAllAvailableController_1.FindAllAvailableController();
var updateDeliverymanController = new UpdateDeliverymanController_1.UpdateDeliverymanController();
var findAllDeliveriesController = new FindAllDeliveriesController_1.FindAllDeliveriesController();
var findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController_1.FindAllDeliveriesDeliverymanController();
var updateEndDateController = new UpdateEndDateController_1.UpdateEndDateController();
routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);
routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/delivery/", ensureAuthenticateCLient_1.ensureAuthenticateCLient, createDeliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman_1.ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman_1.ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
routes.get("/client/deliveries", ensureAuthenticateCLient_1.ensureAuthenticateCLient, findAllDeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman_1.ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman_1.ensureAuthenticateDeliveryman, updateEndDateController.handle);
//# sourceMappingURL=routes.js.map