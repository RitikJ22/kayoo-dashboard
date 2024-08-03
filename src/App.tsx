import { CodeEditor, Sidebar, Workflow } from "./components";
import { BlockBuilder } from "./components/block-builder.component";
import "./global.css";

function App() {
  return (
    <div className="flex min-h-svh w-full p-4">
      <Sidebar />
      <main className="flex flex-col gap-12 w-[92vw]">
        <div className="flex mb-16">
          <Workflow />
        </div>
        <div className="flex items-center justify-between w-full">
          <CodeEditor />
          <BlockBuilder />
        </div>
      </main>
    </div>
  );
}

export default App;
