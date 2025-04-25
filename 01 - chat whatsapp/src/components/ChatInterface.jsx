import { useState } from "react";
export default function ChatInterface() {
  const [isTexting, setIsTexting] = useState(false);
  const [message, setMessage] = useState("");
  const [Chat, setChat] = useState([]);
  const [visibleChat, setVisibleChat] = useState(false);
  let date = new Date();
  const handleTexting = (event) => {
    const newValue = event.target.value; // Obtiene el valor actual del input
    setMessage(newValue);
    setIsTexting(newValue.trim() !== ""); // Actualiza isTexting en tiempo real
  };

  const handleMessage = () => {
    setVisibleChat(true);
    setChat([...Chat, message]);
    setMessage("");
  };

  const handleVoiceMessage = () => {
    console.log("esto es un mensaje de voz");
  };

  return (
    <div className="w-[300px] h-[500px] bg-background-primary rounded-lg shadow-lg">
      <header className="w-full h-[10%] bg-header flex justify-between items-center px-4">
        <section className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
            <img src="/vite.svg" alt="Foto de perfil" className="w-full" />
          </div>
          <div className="ml-2 p-1">
            <h1 className="text-md font-medium text-white">Friend Name</h1>
            <p className="text-xs text-white">Online</p>
          </div>
        </section>
        <section className="flex items-center justify-center space-x-5">
          <button className="cursor-pointer">
            <i className="fa-solid fa-video text-white"></i>
          </button>
          <button className="cursor-pointer">
            <i className="fa-solid fa-phone text-white"></i>
          </button>
          <button className="cursor-pointer">
            <i className="fa-solid fa-ellipsis-vertical text-white"></i>
          </button>
        </section>
      </header>
      <main className=" w-full h-[80%] bg-main flex flex-col items-end">
        {visibleChat &&
          Chat.map((message, index) => (
            <div key={index} className="w-[50%] bg-white rounded-lg p-2 my-2">
              <p className="text-md">
                {message}
                <span className="text-xs text-gray-400">
                  {date.getHours()}:{date.getMinutes()}
                </span>
              </p>
            </div>
          ))}
      </main>
      <footer className="w-full h-[10%] flex justify-between items-center pl-0.5">
        <div className="relative w-[83%]">
          <input
            type="text"
            placeholder="Type a message"
            className="block w-full h-10 rounded-full px-7 bg-footer"
            value={message}
            onChange={handleTexting}
          />
          <button className="cursor-pointer absolute inset-y-0 left-1.5">
            <i className="fa-regular fa-face-smile"></i>
          </button>
          <button className="cursor-pointer absolute inset-y-0 right-8">
            <i className="fa-solid fa-paperclip"></i>
          </button>
          <button className="cursor-pointer absolute inset-y-0 right-2">
            <i className="fa-solid fa-camera"></i>
          </button>
        </div>
        {isTexting ? (
          <button
            className="w-[15%] h-[90%] mr-1 rounded-full bg-header text-md cursor-pointer"
            onClick={handleMessage}
          >
            <i className="fa-solid fa-paper-plane text-white"></i>
          </button>
        ) : (
          <button
            className="w-[15%] h-[90%] mr-1 rounded-full bg-header text-md cursor-pointer"
            onClick={handleVoiceMessage}
          >
            <i className="fa-solid fa-microphone text-white"></i>
          </button>
        )}
      </footer>
    </div>
  );
}
