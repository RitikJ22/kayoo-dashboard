import { FaCodeBranch } from "react-icons/fa";
import { Tab } from "./tab.component";
import { BsWindowSidebar } from "react-icons/bs";

export const Workflow = () => {
  const tabs = [
    { type: "code", icon: <BsWindowSidebar size={20} /> },
    {
      type: "code-branch",
      icon: <FaCodeBranch size={20} />,
      text: "Flow View",
    },
  ];
  return (
    <div className="min-h-svh">
      <div className="h-full w-full flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-center justify-normal gap-2">
            <h2 className="text-2xl font-bold">Project Name</h2>
            <span className="text-md text-purple-500 bg-purple-500/20 rounded-md px-1">
              Configure workflow
            </span>
          </div>
          <p className="text-md font-light text-[#bcbcbc]">
            Now you're using the beta version of Kayoo
          </p>
        </div>
        <div>
          <Tab tabs={tabs} />
        </div>
      </div>
    </div>
  );
};