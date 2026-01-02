import { useState   } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage';
import  ChatMessages  from './components/ChatMessages';
import './App.css'

function App() {
        
const array=useState([  ]);

          const chatMessages=array[0];
          const updateData=array[1];

          return (
          <div className="app-container">
            {chatMessages.length == 0 &&(
             <p class="welcomeText">
              Hello! I am MiniBot.<br />
              I can help you with today's date, flip a coin and roll a dice.
             </p>
          )}
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput chatMessages={chatMessages} updateData={updateData}> </ChatInput>
          </div>
          );
}

export default App
