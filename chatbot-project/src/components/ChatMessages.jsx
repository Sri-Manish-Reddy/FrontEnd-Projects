 import {  useRef,useEffect } from 'react'
 import { ChatMessage } from './ChatMessage';
   function ChatMessages({ chatMessages }) {
      const chatMessagesRef = useRef(null);
      useEffect(() => {
        const containerELlem = chatMessagesRef.current;
        if (containerELlem) {
          containerELlem.scrollTop = containerELlem.scrollHeight;

        }
      }, [chatMessages]);


      return (
        <div className="chat-msg-container" ref={chatMessagesRef}>
          {
            chatMessages.map((each) => {
              return (
                <ChatMessage msg={each.msg} sender={each.sender} key={each.key} />
              );
            })
          }
          </div>
          );
} 

export default ChatMessages