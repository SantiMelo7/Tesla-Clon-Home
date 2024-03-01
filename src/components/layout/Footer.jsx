export const Footer = () => {
  return (
    <footer
      className={`
        relative md:bg-transparent opacity-[1] sm:bg-[#000] md:border-none block
        sm:border-white sm:border-t-[1px] h-full`}
    >
      <ul
        className={`
          flex md:flex-row sm:flex-col justify-center items-center gap-x-4 sm:pt-5 sm:gap-y-4 text-[#d0d1d2] list-footer
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
