import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4001");

const profilePics = [
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
];

const getRandomProfilePic = () => {
  return profilePics[Math.floor(Math.random() * profilePics.length)];
};

const Chat = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfilePic, setUserProfilePic] = useState("");
  
  const chatContainerRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("joined_room", (room) => {
      console.log(`You have joined the room: ${room}`);
    });

    return () => {
      socket.off("receive_message");
      socket.off("joined_room");
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleLogin = () => {
    if (username.trim() && room.trim()) {
      setUserProfilePic(getRandomProfilePic());
      socket.emit("join_room", room);
      setIsLoggedIn(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", {
        room,
        username,
        message,
        profilePic: userProfilePic,
      });
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Group Chat
        </h2>

        {!isLoggedIn ? (
          <div className="flex flex-col items-center space-y-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Enter Room Name"
              className="w-full p-2 border rounded-lg"
            />
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Join Chat Room
            </button>
          </div>
        ) : (
          <>
            <div className="text-xl mb-4">
            Chat Room Name: {room}
            </div>
            <div className=" text-gray-600 mb-4 text-lg">
              Welcome, <span className="text-blue-500 ">{username} </span> 
            </div>


            <div
              ref={chatContainerRef}
              className="h-64 overflow-y-auto border rounded-lg p-3 bg-gray-50 mb-4"
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    msg.username === username ? "justify-end" : "justify-start"
                  } mb-3`}
                >
                  <div className="flex-shrink-0">
                    <img
                      src={msg.profilePic}
                      alt={msg.username}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                  </div>

                  <div
                    className="p-3 rounded-lg"
                    style={{
                      backgroundColor: msg.username === username ? "#DCF8C6" : "#E5E5E5",
                      maxWidth: "70%",
                    }}
                  >
                    <strong>{msg.username}</strong>
                    <p>{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-full">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full p-2 border rounded-lg"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
              </div>
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
