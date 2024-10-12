import React, { useState, useEffect, useRef } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    setSocket(newSocket);

    newSocket.onmessage = (event) => {
      const message = JSON.stringify(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage && username) {
      const message = { username, text: inputMessage };
      socket.send(JSON.stringify(message));
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">React WebSocket Chat</h1>
      <div className="flex-grow overflow-y-auto mb-4 border rounded p-2" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{String(msg)}:</strong>
            <strong>{msg.username}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex flex-col">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="mb-2 p-2 border rounded"
        />
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-grow p-2 border rounded-l"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatApp;