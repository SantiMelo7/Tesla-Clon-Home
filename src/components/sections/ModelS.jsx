import Section from "../Section";
import { LinkDouble } from "../buttons/index";
import Image from "../images/Image";

export const ModelS = () => {
  return (
    <section className="text-center h-screen w-screen relative overflow-hidden">
      <Section title="Model S" className="text-black">
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <LinkDouble />
        </footer>
      </Section>
      <Image src="./model-s.avif" alt="Model-S Image" />
    </section>
  );
};
