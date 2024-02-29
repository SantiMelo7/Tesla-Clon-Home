import { Section } from "../layout/index";
import Image from "../images/Image";
import { Link } from "../buttons/index";

export const Acessories = () => {
  return (
    <section className="text-center h-screen w-screen relative">
      <Section title="Accesorios" className="text-black relative bottom-3">
        <footer className="flex flex-col flex-grow justify-end mb-[25px]">
          <Link
            href="https://shop.tesla.com/es_mx?tesref=true"
            text="Compra ahora"
            className="py-2.5 px-15 bg-white text-black"
          />
        </footer>
      </Section>
      <Image src="./accessories.avif" alt="Accessories Image" />
    </section>
  );
};
