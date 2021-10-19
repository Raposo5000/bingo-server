import { Socket } from "socket.io";
import { Rooms } from "../../domain/Rooms";

export function leaveRoom(socket: Socket) {
  const rooms = Rooms.getInstance();
  try {
    rooms.leaveRoom(socket.id);
  } catch (error) {
    console.log(error);
  }
}
