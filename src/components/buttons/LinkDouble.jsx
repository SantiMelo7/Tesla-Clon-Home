export const LinkDouble = () => {
  return (
    <div className="flex md:flex-row sm:flex-col sm:gap-y-4 mx-auto gap-x-3">
      <a
        className="inline-block mx-auto py-2 px-14 text-sm rounded-[4px] font-normal
        shadow-xl hover:scale-95 hover:transition bg-[#f4f4f4cc] text-black animate-slide-in-left"
        target="_blank"
        rel="noopener norreferer"
      >
        Orden Personalizada
      </a>
      <a
        className="inline-block mx-auto py-2 px-16 text-sm rounded-[4px] font-normal animate-slide-in-right
        shadow-xl hover:scale-95 hover:transition bg-[#171a20a6] text-white"
        target="_blank"
        rel="noopener norreferer"
      >
        Prueba de manejo
      </a>
    </div>
  );
};
