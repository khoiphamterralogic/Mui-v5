import React from "react";

function WelcomeMessage({ mess, getMess }) {
  return (
    <div>
      <input
        type="text"
        value={mess}
        onChange={(e) => {
          getMess(e.target.value);
        }}
      />
    </div>
  );
}

export default WelcomeMessage;
