import { Axios } from "axios";
import React, { useState } from "react";
import axios from "./plugin/Axios";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState();

  const search = async () => {
    const payload = {
      message: input,
    };
    const response = await axios.post("sendRequest", payload);
    console.log(response.data);
    setOutput(response.data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <div
        className="p-6 flex flex-col items-center "
        style={{ width: "100vw" }}
      >
        <div>
          <h1 className="text-2xl font-bold text-center">🤖 AI Assistant </h1>
          <input
            className="border p-2 rounded-2xl mt-8 mb-4"
            value={input}
            style={{ width: "500px" }}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search with GPT..."
          />
        </div>
        <div>
          <button
            onClick={search}
            className="bg-blue-500 text-white px-4 py-2 ml-2 rounded"
          >
            Search
          </button>
        </div>
        <div>
          <pre
            className="mt-4 text-left"
            style={{ width: "50vw", textWrap: "pretty" }}
          >
            {output}
          </pre>
        </div>
      </div>
    </form>
  );
}

export default App;
