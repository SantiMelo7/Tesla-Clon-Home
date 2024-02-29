import Section from "../Section.jsx";
import Video from "../Video.jsx";
import { Link } from "../buttons/index.js";

export const VideoExperiencie = () => {
  return (
    <section className="text-center h-screen w-screen relative overflow-hidden">
      <Section
        title="Vive la experiencia Tesla"
        subTitle="Agenda una prueba de manejo de hoy"
      >
        <footer className="flex flex-col flex-grow justify-end mb-[48px]">
          <Link
            href="https://www.tesla.com/es_mx/drive?"
            text="Prueba de manejo"
            className="py-[6px] px-12 bg-transparent border-[4px] border-white"
          />
        </footer>
      </Section>
      <Video src="./experience-tesla.webm" />
    </section>
  );
};
