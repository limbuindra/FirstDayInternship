import { Server } from "socket.io";
import { createServer } from "http";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5174", // Your React frontend URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join_room", (room) => {
    socket.join(room);  
    console.log(`User joined room: ${room}`);
  });

  socket.on("send_message", ({ room, username, message, profilePic }) => {
    io.to(room).emit("receive_message", { username, message, profilePic });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

httpServer.listen(4001, () => {
  console.log("Server is running on port 4001");
});
