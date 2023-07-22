import './Chat.css';
import React, { useState } from 'react';
import CustomChatbot from './Chatbot'; // Import the CustomChatbot component
import chatImage from './Images/Chat.svg'

function Chat() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleImageClick = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      {showChatbot && <CustomChatbot />}
      <div className="d-flex justify-content-end">
        <div className="chat-image">
          <a  onClick={handleImageClick}>
            <img
              src={chatImage}
              alt="Chat"
              height="60"
              width="60"
            />
          </a>
        </div>
      </div>

      {/* Conditional rendering for the Chatbot */}
      
    </div>
  );
}

export default Chat;
