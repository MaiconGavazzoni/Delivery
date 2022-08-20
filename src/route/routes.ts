import { Router } from "express";
import { AuthenticateClientController } from "../modules/account/authenticateUser/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "../modules/clients/useCase/createClient/CreateClientController";
import { FindAllDeliveriesController } from "../modules/clients/useCase/deliveries/FindAllDeliveriesController";
import { CreateDeliveryController } from "../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "../modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController";
import { UpdateEndDateController } from "../modules/deliveries/useCases/updateEndDate/UpdateEndDateController";
import { CreateDeliverymanController } from "../modules/deliveryman/useCase/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "../modules/deliveryman/useCase/findAllDeliveries/FindAllDeliveriesDeliverymanController";
import { ensureAuthenticateCient } from "../middlewares/ensureAuthenticateCient";
import { ensureAuthenticateDeliveryman } from "../middlewares/ensureAuthenticateDeliveryman";
import { CreateTesteController } from "../modules/teste/useCase/createTeste/CreateTesteController";

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

const createTesteController = new CreateTesteController();

routes.post("/client/authenticate/", authenticateClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post("/delivery/", ensureAuthenticateCient, createDeliveryController.handle);
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);

routes.get("/client/deliveries", ensureAuthenticateCient, findAllDeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);

routes.get("/teste", createTesteController.handle);


export { routes };