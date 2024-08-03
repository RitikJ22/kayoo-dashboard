import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/themes/prism.css";
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const placeholderCode = `
// Sample JavaScript Code
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");
`;

export const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(placeholderCode);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      toast.success("Code copied to clipboard!");
    });
  };

  return (
    <div className="flex flex-col p-4 rounded-xl bg-[#2c2c2c]/90 mx-4 w-full h-full">
      <ToastContainer />
      <div className="flex items-center justify-between mb-4">
        <label className="text-lg font-semibold text-[#bdbdbd] uppercase">
          Code Editor
        </label>
        <button
          className="flex items-center w-fit border border-white text-white px-4 py-2 rounded-md focus:outline-none hover:bg-[#bdbdb]"
          onClick={handleCopy}
        >
          <FiCopy className="mr-2" />
          <span>Copy</span>
        </button>
      </div>
      <div className="rounded-md p-2 border ">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js, "javascript")}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 14,
            color: "#f8f8f2",
          }}
          className="border-none outline-none w-full h-48"
        />
      </div>
    </div>
  );
};
