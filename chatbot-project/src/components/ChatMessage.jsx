 
import robotImg from '../assets/robot.png'
import userImg from '../assets/user.png'
export  function ChatMessage({ msg, sender }) {

      return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
          {sender === 'robot' && <img src={robotImg} className="chat-message-profile" />}
          <div className="chat-message-text">
            {msg}
          </div>
          {sender === 'user' && <img src={userImg} className="chat-message-profile" />}
        </div>
      );

    }
    