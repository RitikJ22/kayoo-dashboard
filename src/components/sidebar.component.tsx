import { useState } from "react";
import { BsBugFill } from "react-icons/bs";
import { FaCode, FaCodeBranch } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { IoPersonCircleSharp, IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { TbHexagons, TbScreenshot } from "react-icons/tb";

type LinkType =
  | "screenshot"
  | "code-branch"
  | "code"
  | "database"
  | "bugs"
  | "settings"
  | "logout";

export const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<LinkType>("code-branch");

  const iconClass = (link: LinkType) =>
    activeLink === link
      ? "border-purple-500 border text-purple-500/50 rounded-md"
      : "text-[#dbdbdb]/50";

  return (
    <div className="min-h-[90vh] py-3 bg-[#2c2c2c]/90 px-3 rounded-xl flex flex-col justify-between items-start">
      <div className="flex-col flex justify-between items-center gap-10 ">
        <a href="/">
          <TbHexagons size={35} />
        </a>
        <div className="flex-col flex gap-8">
          <a
            href="#"
            className={iconClass("screenshot")}
            onClick={() => setActiveLink("screenshot")}
          >
            <TbScreenshot size={25} className="m-2" />
          </a>
          <a
            href="#"
            className={iconClass("code-branch")}
            onClick={() => setActiveLink("code-branch")}
          >
            <FaCodeBranch size={25} className="m-2" />
          </a>
          <a
            href="#"
            className={iconClass("code")}
            onClick={() => setActiveLink("code")}
          >
            <FaCode size={25} className="m-2" />
          </a>
          <a
            href="#"
            className={iconClass("database")}
            onClick={() => setActiveLink("database")}
          >
            <FiDatabase size={25} className="m-2" />
          </a>
          <a
            href="#"
            className={iconClass("bugs")}
            onClick={() => setActiveLink("bugs")}
          >
            <BsBugFill size={25} className="m-2" />
          </a>
        </div>
      </div>
      <div className="flex-col flex justify-between items-center gap-10">
        <div className="flex-col flex gap-6">
          <a
            href="#"
            className={iconClass("settings")}
            onClick={() => setActiveLink("settings")}
          >
            <IoSettingsSharp size={25} className="m-2" />
          </a>
          <a
            href="#"
            className={iconClass("logout")}
            onClick={() => setActiveLink("logout")}
          >
            <MdLogout size={25} className="m-2" />
          </a>
        </div>
        <a href="/">
          <IoPersonCircleSharp size={35} />
        </a>
      </div>
    </div>
  );
};
