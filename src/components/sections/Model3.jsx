import Section from "../Section";
import { LinkDouble } from "../buttons/index";
import Image from "../images/Image";

export const Model3 = () => {
  return (
    <section className="text-center h-screen w-screen relative">
      <Section title="Model 3" className="text-black animate-slide-in-bottom">
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <LinkDouble />
        </footer>
      </Section>
      <Image src="./model-3.avif" alt="Model-3 Image" />
    </section>
  );
};
