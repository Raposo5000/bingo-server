import { Socket } from "socket.io";

interface IJoinRoom {
  socket: Socket;
}

export function joinRoom({ socket }: IJoinRoom) {
  socket.on("create", (room: string) => {
    console.log(room)
    socket.join(room);
  });
}
