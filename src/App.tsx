import { CodeEditor, Sidebar, Workflow } from "./components";
import { BlockBuilder } from "./components/block-builder.component";
import "./global.css";

function App() {
  return (
    <div className="flex min-h-svh w-full p-4">
      <Sidebar />
      <main className="flex flex-col gap-12 w-[92vw]">
        <div className="flex mb-32 md:mb-16">
          <Workflow />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-md:gap-5 max-md:mx-4">
          <CodeEditor />
          <BlockBuilder />
        </div>
      </main>
    </div>
  );
}

export default App;
