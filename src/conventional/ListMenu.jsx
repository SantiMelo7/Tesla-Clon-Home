import { useHover } from "../useHover";

export const ListMenu = ({ text }) => {
  const { menuStyles, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </li>
      <div className="absolute top-[22px] left-[22px] right-0">
        <div
          className="absolute bg-black/5 backdrop-blur-lg transition-all duration-500
          ease-out opacity-0 -z-20"
          style={menuStyles}
        ></div>
      </div>
    </>
  );
};
