import React, { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";

function Home() {
  const [mess, setMess] = useState("");
  const getWelcomeMess = (messsage) => {
    console.log("message", messsage);
    setMess(messsage);
  };

  return (
    <div>
      <WelcomeMessage getMess={getWelcomeMess} val={mess} />
      <p>{mess}</p>
    </div>
  );
}

export default Home;
