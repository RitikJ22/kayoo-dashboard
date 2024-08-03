import { Sidebar, Workflow } from "./components";
import "./global.css";

function App() {
  return (
    <div className="flex min-h-svh w-full p-4">
      <Sidebar />
      <div className="flex flex-grow">
        <Workflow />
      </div>
    </div>
  );
}

export default App;
