import { useState } from 'react';
import mod1 from '../Images/modlel1.png';
import mod2 from '../Images/model2.png';
import mod3 from '../Images/model3.png';
import c from '../Images/Group 1171276281.png'; // Image for closed state (open button)
import d from '../Images/Group 1171276282.png'; // Image for open state (close button)

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 2, text: 'Lorem ipsum dolor sit general sac mascho werho' },
    { id: 1, text: 'Lorem ipsum dolor sit general sac mascho werho' },
    { id: 1, text: 'Lorem ipsum dolor sit general sac mascho werho' },
    { id: 2, text: 'Lorem ipsum dolor sit general sac mascho werho' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal open/close
  };

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
      setNewMessage(''); // Clear input field after sending
    }
  };

  return (
    <>
      {/* Button to trigger the chat modal */}
      <button onClick={toggleModal} className="text-white px-4 py-2 rounded-lg">
        {/* Conditionally render the image based on whether the modal is open or closed */}
        <img className="w-[77px] h-[77px] text-white" src={isOpen ? d : c} alt="Chat Button" />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-end">
          <div className="bg-white w-[331px] rounded-lg shadow-lg flex flex-col h-[530px]">
            {/* Modal Header */}
            <div className="h-[63px] py-[25px] px-[15px] bg-[#F26922] text-white flex justify-between items-center">
              <h2 className="text-[#FAFAFA]">Chat with Cypher</h2>
              {/* Dynamic closing button using the 'd' image */}
              <button onClick={toggleModal} className="text-white text-xl">
                <img className="w-[30px] h-[30px]" src={d} alt="Close Modal" />
              </button>
            </div>

            {/* Modal Body - Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg w-[213px] ${
                      message.id % 2 === 0
                        ? 'bg-[#3F3F46] text-white float-right'
                        : 'bg-blue-200 float-left'
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer -  and Send Button */}
            <div className="p-4 border-t border-gray-300">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <div className="flex items-center">
                  <img src={mod1} className="w-6 h-6" alt="emoji1" />
                  <img src={mod2} className="w-6 h-6" alt="emoji2" />
                  <img src={mod3} className="w-6 h-6" alt="emoji3" />
                </div>
                <button
                  onClick={handleSend}
                  className="bg-[#F26922] text-white px-[25px] py-[11px] rounded-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatModal;
