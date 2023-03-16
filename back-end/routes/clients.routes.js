import clientsController from "../controllers/Clients/clients.controller";
import express from "express";

const router = express.Router();

router.route("/clients").post((req, res) => clientsController.create(req, res));

router.route("/clients").get((req, res) => clientsController.getAll(req, res));

router.route("/clients/:id").get((req, res) => clientsController.get(req, res));

router
  .route("/clients/:id")
  .delete((req, res) => clientsController.delete(req, res));

router
  .route("/clients/:id")
  .put((req, res) => clientsController.update(req, res));

export default router;
