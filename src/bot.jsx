import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      const botMessage = { text: getBotResponse(input), sender: 'bot' };

      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  const getBotResponse = (message) => {
    const msg = message.toLowerCase();
    if (msg.includes('hello') || msg.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (msg.includes('how are you')) {
      return 'I am just a bot, but I am functioning as expected. How can I assist you?';
    } else if (msg.includes('what is your name')) {
      return 'I am a chatbot created using React!';
    } else if (msg.includes('bye')) {
      return 'Goodbye! Have a great day!';
    }
    return "I'm not sure how to respond to that.";
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
