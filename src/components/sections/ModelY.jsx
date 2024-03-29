import { Section } from "../layout/index";
import { Video } from "../layout/index";
import { LinkDouble } from "../buttons/LinkDouble";

export const ModelY = () => {
  return (
    <section className="text-center h-screen w-screen relative overflow-hidden">
      <Section title="Model Y" className="text-white">
        <footer className="flex flex-col flex-grow justify-end mb-[45px] font-extrabold">
          <LinkDouble />
        </footer>
      </Section>
      <Video src="./model-y.mp4" alt="Model-Y Image" />
    </section>
  );
};
