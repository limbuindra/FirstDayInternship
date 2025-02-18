import React, { useState } from 'react';

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    console.log(message); 
    setMessage('');
  };

  return (
    <div className="flex-1 bg-gray-100 p-6">
      <div className="bg-white p-4 rounded-lg shadow-lg h-full flex flex-col">
        <div className="flex-1 overflow-auto mb-4">
          <div className="mb-4">
            <div className="text-sm text-gray-600">User1</div>
            <div className="text-lg text-gray-800">Hello!</div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-gray-600">User2</div>
            <div className="text-lg text-gray-800">Hi, how are you?</div>
          </div>
        </div>

        <div className="flex items-center border-t-2 pt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 px-4 py-2 rounded-full border-2 border-gray-300 mr-4 text-sm md:text-base"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm md:text-base"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
