export const Footer = () => {
  return (
    <footer
      className={`
        relative md:bg-transparent sm:bg-[#000] sm:top-32 sm:h-[27%] md:border-none
        sm:border-white sm:border-t-[1.6px] opacity-[0.9]
      `}
    >
      <ul
        className={`
          flex md:flex-row sm:flex-col justify-center items-center gap-x-3 text-xs
          sm:text-sm sm:pt-5 sm:gap-y-4 text-[#d0d1d2] font-extrabold
        `}
      >
        <li className="">Tesla @ 2024</li>
        <li>Privacidad y Legal</li>
        <li>Llamadas a revisión de vehículos</li>
        <li className="md:flex sm:hidden">Contacto</li>
        <li>Noticias</li>
        <li className="md:flex sm:hidden">Ubicaciones</li>
      </ul>
    </footer>
  );
};
