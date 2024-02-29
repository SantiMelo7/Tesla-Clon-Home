import { useHover } from "../useHover";

export const ListMenu = ({ text }) => {
  const { menuStyles, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </li>
      <div className="absolute top-[18px] left-[23px] right-0">
        <div
          className="absolute bg-black/5 backdrop-blur-lg transition-all duration-500
          ease-in-out opacity-0 -z-10 py-4 "
          style={menuStyles}
        ></div>
      </div>
    </>
  );
};
