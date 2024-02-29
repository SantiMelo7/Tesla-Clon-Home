import { useHover } from "../useHover";

export const HoverDiv = () => {
  const { menuStyles } = useHover();

  return (
    <div className="absolute top-[18px] left-[23px] right-0">
      <div
        className="absolute bg-black/5 backdrop-blur-lg rounded-[6px] transition-all animation-duration-800
          ease-out opacity-0 -z-10 py-4"
        style={menuStyles}
      ></div>
    </div>
  );
};
