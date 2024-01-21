// src/App.tsx
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [responseData, setResponseData] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const apiUrl = "http://localhost:5230/api/Tests";
      const response = await axios.post(apiUrl, { textboxname: inputValue });

      setResponseData("Successfully saved data with ID:" + response?.data?.id);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <h1>React API Example</h1>
      <label>
        Enter Data:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h2>Response:</h2>
        <pre>{responseData}</pre>
      </div>
    </div>
  );
};

export default App;
