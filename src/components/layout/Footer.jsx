export const Footer = () => {
  return (
    <footer
      className={`
        relative md:bg-transparent sm:bg-[#000] md:border-none
        sm:border-white sm:border-t-[2px] h-full`}
    >
      <ul
        className={`
          flex md:flex-row sm:flex-col justify-center items-center gap-x-4
          sm:text-sm sm:pt-5 sm:gap-y-4 text-[#d0d1d2] font-light
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
