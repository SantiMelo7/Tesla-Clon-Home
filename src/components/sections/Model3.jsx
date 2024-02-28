import Section from "../Section";
import LinkDouble from "../buttons/LinkDouble";
import Image from "../images/Image";

export default function Model3() {
  return (
    <section className="text-center h-screen w-screen relative">
      <Section title="Model 3" className="text-black">
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <LinkDouble />
        </footer>
      </Section>
      <Image src="./model-3.avif" alt="Model-3 Image" />
    </section>
  );
}
