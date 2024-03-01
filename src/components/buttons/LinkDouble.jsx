import { LinksMultiple } from "../../conventional/index";

export const LinkDouble = () => {
  return (
    <div className="flex md:flex-row sm:flex-col sm:gap-y-4 mx-auto gap-x-3">
      <LinksMultiple
        text="Orden Personalizada"
        className="bg-[#f4f4f4cc] text-black animate-slide-in-left"
      />
      <LinksMultiple
        text="Prueba de manejo"
        className="bg-[#171a20a6] text-white animate-slide-in-right"
      />
    </div>
  );
};
