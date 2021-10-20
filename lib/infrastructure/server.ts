import express from "express";
import { routes } from "../interfaces/routes/routes";
import cors from "cors";

export class Server {
  private server = express();

  private routes(): void {
    this.server.use(routes);
  }

  private middlewares(): void {
    this.server.use(express.json({ limit: "50mb" }));
    this.server.use(express.urlencoded({ extended: true, limit: "50mb" }));
    this.server.use(cors());
  }

  public start(port: number): void {
    this.middlewares();
    this.routes();
    this.server.listen(port, () => {
      console.log(`Is avaliable on: http://localhost:50950`);
    });
  }
}
