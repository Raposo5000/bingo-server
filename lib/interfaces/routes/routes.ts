import { Response, Router } from "express";
import { Rooms } from "../../domain/Rooms";

const routes = Router();

routes.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

routes.get("/rooms", async (_, res: Response) => {
  const rooms = Rooms.getInstance();
  const allRooms = rooms.getRooms();
  res.send(allRooms);
});

export { routes };
