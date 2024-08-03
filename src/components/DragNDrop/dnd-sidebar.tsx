import React, { useState } from "react";
import { FiChevronRight, FiChevronDown, FiChevronLeft } from "react-icons/fi";
import { IoIosSearch, IoMdListBox } from "react-icons/io";

type Dropdown = {
  id: string;
  label: string;
};

type NodeItem = {
  id: string;
  label: string;
};

type DndSideBarProps = {
  onAddNode: (id: string, label: string) => void;
  setSelectedDropdown: (id: string) => void;
};

const dropdowns: Dropdown[] = [
  { id: "navigation", label: "Navigation" },
  { id: "left-container", label: "Left Container" },
  { id: "right-container", label: "Right Container" },
];

const nodeItems: NodeItem[] = [
  { id: "heading1", label: "Heading 1" },
  { id: "para", label: "Paragraph" },
  { id: "button", label: "Button" },
];

export const DndSideBar: React.FC<DndSideBarProps> = ({
  onAddNode,
  setSelectedDropdown,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setSelectedDropdown(id);
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <aside className="h-full rounded-xl bg-[#2c2c2c]/90 md:min-w-[250px] py-5 px-2 gap-3">
      <div className="text-white text-lg font-bold flex items-center justify-between gap-3">
        <div className="flex items-center justify-start gap-1">
          <FiChevronLeft />
          <span className="text-white max-md:text-xs">Code Transform</span>
        </div>
        <IoIosSearch className="md:w-6 md:h-6 w-4 h-4" />
      </div>
      <div className="w-full h-[1px] bg-[#bdbdbd] mt-3 mb-5" />
      <button className="mb-3 border-purple-500 py-2 px-1 border bg-purple-500/20 text-white rounded-md flex items-center justify-between w-full">
        <div className="flex items-center justify-center gap-1">
          <IoMdListBox size={20} />
          <span className="text-xs md:text-base"> Header section</span>
        </div>
        <FiChevronDown size={20} />
      </button>
      {dropdowns.map((dropdown) => (
        <div key={dropdown.id} className="rounded-md">
          <div
            className="cursor-pointer p-3 mt-1 text-white justify-between items-center flex hover:bg-[#bdbdbd]/40 rounded-md"
            onClick={() => toggleDropdown(dropdown.id)}
          >
            <div className="flex items-center justify-center gap-1 text-xs md:text-base">
              <IoMdListBox size={20} />
              {dropdown.label}
            </div>
            <span>
              {openDropdown === dropdown.id ? (
                <FiChevronDown />
              ) : (
                <FiChevronRight />
              )}
            </span>
          </div>
          {openDropdown === dropdown.id && (
            <div className="pl-4">
              {nodeItems.map((item) => (
                <div
                  key={item.id}
                  className="h-5 p-2 py-5 flex justify-start text-xs md:text-md items-center cursor-pointer hover:bg-[#bdbdbd]/40 rounded-md"
                  onClick={() => onAddNode(item.id, item.label)}
                >
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};
