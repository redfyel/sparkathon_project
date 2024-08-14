import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { role: 'user', content: userInput }]);
      setUserInput('');

      // Replace this with your chatbot logic
      const chatbotResponse = { role: 'chatbot', content: 'You said: ' + userInput };
      setMessages([...messages, chatbotResponse]);
    }
  };

  return (
    <div className="chatbot">
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>   

        ))}
      </div>
      <div className="input-container">
        <input
          type="text"   

          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;