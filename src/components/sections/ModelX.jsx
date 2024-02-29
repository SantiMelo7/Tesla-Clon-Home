import { Section } from "../layout/Section";
import { LinkDouble } from "../buttons/LinkDouble";
import Image from "../images/Image";

export const ModelX = () => {
  return (
    <section className="text-center h-screen w-screen relative overflow-hidden">
      <Section title="Model X" className="text-black">
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <LinkDouble />
        </footer>
      </Section>
      <Image src="./model-x.avif" alt="Model-X Image" />
    </section>
  );
};
