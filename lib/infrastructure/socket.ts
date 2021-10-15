import { createServer } from "http";
import { Socket, Server } from "socket.io";
import { joinRoom } from "../interfaces/controllers/join-room";

export class SocketServer {
  private _httpServer = createServer();
  private _io: Server = new Server(this._httpServer, {
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false,
  });

  public start(port: number): void {
    this._httpServer.listen(process.env.PORT || port || 3001);
    console.log(`Socket is avaliable on: http://localhost:${port}`);

    this._io.on("connection", (socket: Socket) => {
      joinRoom({ socket });

      socket.on("getRooms", () => {
        console.log(socket.rooms);
      });

      console.log("Socket connected:: ", socket.id);
    });
  }
}
