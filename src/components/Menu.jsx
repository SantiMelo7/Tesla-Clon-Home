"use client";

import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SvgResponsive from "./responsive/SvgResponsive";
import { useHover } from "../useHover";

export default function Menu() {
  const { menuStyles, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <header className="px-10 py-10 md:-top-6 sm:-left-6 flex items-center w-full fixed justify-between z-40">
      <SvgResponsive />
      <div
        className={`absolute bg-gray-200 transition-all`}
        style={menuStyles}
      ></div>
      <nav>
        <ul className="md:flex sm:hidden gap-x-6 text-sm [&>li>a]:font-bold">
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#"></a>Vehiculos
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#"></a>Energía
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#"></a>Carga
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#"></a>Descubrir
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href="#"></a>Tienda
          </li>
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end right-2 basis-0 relative -top-[3px]">
        <ul className="md:flex sm:hidden gap-x-6 [&>li>a]:font-bold">
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <LanguageIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <HelpOutlineIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
          </li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <AccountCircleIcon className="w-[20px] h-[20px] border-[#333] text-[#333]" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
