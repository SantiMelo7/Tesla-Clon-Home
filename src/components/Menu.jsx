"use client";

import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Menu() {
  return (
    <header className="px-10 py-10 md:-top-6 sm:-left-6 flex items-center w-full fixed justify-between z-40">
      <div className="flex flex-grow basis-0">
        <svg
          className="md:mt-0 sm:-mt-20 sm:w-[120px]"
          viewBox="0 0 342 35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-[#0000000d] backdrop-blur-[16px] my-2 py-1 px-6 sm:relative sm:bottom-10 sm:left-40 md:hidden">
          <span className="text-[#171a20]">Menú</span>
        </div>
      </div>
      <nav>
        <ul className="md:flex sm:hidden gap-x-6 text-sm [&>li>a]:font-bold">
          <li>
            <a href="#"></a>Vehiculos
          </li>
          <li>
            <a href="#"></a>Energía
          </li>
          <li>
            <a href="#"></a>Carga
          </li>
          <li>
            <a href="#"></a>Descubrir
          </li>
          <li>
            <a href="#"></a>Tienda
          </li>
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end right-2 basis-0 relative -top-[3px]">
        <ul className="md:flex sm:hidden gap-4 [&>li>a]: font-bold [&>li>a]:px-1">
          <li>
            <LanguageIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
          </li>
          <li>
            <HelpOutlineIcon className="w-[20px] h-[20px] border-[#171a20] text-[#171a20]" />
          </li>
          <li>
            <AccountCircleIcon className="w-[20px] h-[20px] border-[#333] text-[#333]" />
          </li>
        </ul>
      </nav>
      <div
        id="backdrop"
        className="absolute bg-gray-300 backdrop-blur-lg rounded"
        style={{
          transform: `translateX(var(--left)) translateY(var(--top))`,
          left: 0,
          top: 0,
          width: `var(--width)`,
          height: `var(--height)`,
          transition: `all 500ms ease-in-out`,
          opacity: 0,
          zIndex: -10,
        }}
      ></div>
    </header>
  );
}
