import { Express, Request, Response } from "express";
import {
  createUserHandler,
  createUserSessionHandler,
} from "./src/controller/user.controller";
import validateRequest from "./src/middleware/validateRequest";
import {
  createUserSchema,
  createSessionSchema,
} from "./src/schema/user.schema";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  //Register User
  //POST /api/user
  app.post("/api/users", validateRequest(createUserSchema), createUserHandler);

  //Login User
  //POST /api/sessions
  app.post(
    "/api/sessions",
    validateRequest(createSessionSchema),
    createUserSessionHandler
  );

  //Get the user´s sessions
  // GET /api / sessions

  // logout
  // DELETE /api/sessions
}
