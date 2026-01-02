import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
export function  ChatInput({ chatMessages, updateData }) {
      const [inputText, setInputText] = useState('');
       function saveInput(evet) {
        setInputText(evet.target.value);
       
      }
      function sendMessage() {

        const response = Chatbot.getResponse(inputText);
        setInputText('');
        updateData([...chatMessages, {
          msg: inputText,
          sender: "user",
          key: crypto.randomUUID()
        },
        {
          msg: response,
          sender: "robot",
          key: crypto.randomUUID()
        }
        ]);
    
      }
      return (
        <div className="chat-input-container">
          <input className="chat-input" placeholder="Send a message" size="20" onChange={saveInput} value={inputText} />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      );

    }