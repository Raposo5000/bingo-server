import { Socket } from "socket.io";
import { Rooms } from "../../domain/Rooms";

export function joinRoom(socket: Socket) {
  socket.on("create", (room: string) => {
    const socketId = socket.id;
    socket.join(room);

    const rooms = Rooms.getInstance();
    try {
      rooms.createOrJoinRoom(socketId, room);
    } catch (error) {
      console.log(error);
    }
  });
}
