import { Server } from "./lib/infrastructure/server";
import { SocketServer } from "./lib/infrastructure/socket"

(function () {
  console.clear();
  const server = new Server();
  server.start(50950);

  const socketServer = new SocketServer();
  socketServer.start(50900);
})();
