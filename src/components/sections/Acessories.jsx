import Section from "../Section";
import Link from "../buttons/Link";
import Image from "../images/Image";

export default function Acessories() {
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
}
