"use client";

import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SvgResponsive from "../responsive/SvgResponsive";
import { ListMenu, HoverDiv } from "../../conventional/index";

export const Menu = () => {
  return (
    <header className="px-10 py-10 md:-top-6 sm:-left-6 flex items-center w-full fixed justify-between z-50 animate-slide-in-top">
      <SvgResponsive />
      <nav>
        <ul className="md:flex sm:hidden gap-x-8 text-sm [&>li]: font-extrabold">
          <ListMenu text="Vehículos" />
          <ListMenu text="Energía" />
          <ListMenu text="Carga" />
          <ListMenu text="Descubrir" />
          <ListMenu text="Tienda" />
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end right-2 basis-0 relative -top-[3px]">
        <ul className="md:flex sm:hidden gap-x-8 text-sm [&>li]: font-extrabold">
          <ListMenu
            text={
              <LanguageIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
            }
          />
          <ListMenu
            text={
              <HelpOutlineIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
            }
          />
          <ListMenu
            text={
              <AccountCircleIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
            }
          />
        </ul>
      </nav>
      <HoverDiv />
    </header>
  );
};
