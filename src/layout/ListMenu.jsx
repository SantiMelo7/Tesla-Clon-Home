import { useHover } from "../useHover";

export const ListMenu = ({ text }) => {
  const { handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <>
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {text}
      </li>
    </>
  );
};
