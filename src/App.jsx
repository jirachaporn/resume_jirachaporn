import React from "react";
import Left from "./Component/Left";
import Right from "./Component/Right";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-4xl w-full bg-white flex flex-col xs:flex-row rounded-lg shadow-lg overflow-hidden">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
