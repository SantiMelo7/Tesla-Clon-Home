export const LinksMultiple = ({ text, className }) => {
  return (
    <a
      className={` inline-block py-2 px-14 text-sm rounded-[4px] font-normal
        shadow-lg shadow-[#333] ${className}`}
      target="_blank"
      rel="noopener norreferer"
    >
      {text}
    </a>
  );
};
