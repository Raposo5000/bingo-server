interface IRooms {
  users: Array<string>;
  name: string;
}

export class Rooms {
  private rooms: IRooms[] = [];

  private static instance: Rooms;
  private constructor() {}

  public static getInstance(): Rooms {
    if (!Rooms.instance) {
      Rooms.instance = new Rooms();
    }
    return Rooms.instance;
  }

  public createOrJoinRoom(userID: string, roomName: string): void {
    const isRoomExists: boolean = this.rooms.some(
      (_room: IRooms) => _room.name === roomName
    );

    if (isRoomExists) {
      // join room
      const roomIndex: number = this.getRoomIndexByName(roomName);

      this.rooms[roomIndex].users.push(userID);
    } else {
      // create room
      this.rooms.push({ users: [userID], name: roomName });
    }
  }

  public leaveRoom(userID: string): void {
    const roomIndex = this.getRoomIndexByUser(userID);
    const indexUser = this.rooms[roomIndex].users.indexOf(userID);
    this.rooms[roomIndex].users.splice(indexUser, 1);

    if (this.rooms[roomIndex].users.length === 0)
      this.rooms.splice(roomIndex, 1);
  }

  public getRooms(): any {
    // return this.rooms.map((_room: IRooms) => _room.name);
    return this.rooms;
  }

  // private methods
  private getRoomIndexByUser(id: string): number {
    return this.rooms.findIndex((_room: IRooms) => _room.users.includes(id));
  }

  private getRoomIndexByName(name: string): number {
    return this.rooms.findIndex((_room: IRooms) => _room.name === name);
  }
}
