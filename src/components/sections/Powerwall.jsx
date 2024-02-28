import Section from "../Section";
import Link from "../buttons/Link";
import Image from "../images/Image";

export default function Powerwall() {
  return (
    <section className="text-center h-screen w-screen relative overflow-hidden">
      <Section
        title="Energía solar y Powerwall"
        subTitle="Totalmente eléctrico"
        className="text-black"
        classNameSub="text-black"
      >
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <div className="flex mx-auto gap-x-3">
            <Link
              text="Más información"
              className="py-2 px-16 bg-[#171a20cc] text-white"
            />
          </div>
        </footer>
      </Section>
      <Image src="./powerwall.avif" alt="Powerwall Image" />
    </section>
  );
}
