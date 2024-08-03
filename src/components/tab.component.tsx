import React, { useState } from "react";

type TabProps = {
  tabs: { type: string; icon: React.ReactNode; text?: string }[];
};

export const Tab = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.type);

  const tabClass = (tab: string) =>
    activeTab === tab
      ? "border-purple-500 border text-purple-500/50 rounded-md"
      : "text-[#dbdbdb]/50";

  return (
    <div className="flex gap-10 py-2 bg-[#2c2c2c]/90 px-3 rounded-xl w-fit">
      {tabs.map((tab) => (
        <div
          key={tab.type}
          className={`flex items-center cursor-pointer p-2 gap-2 ${tabClass(
            tab.type
          )}`}
          onClick={() => setActiveTab(tab.type)}
        >
          {tab.icon}
          {tab.text && <span className="text-white">{tab.text}</span>}
        </div>
      ))}
    </div>
  );
};
