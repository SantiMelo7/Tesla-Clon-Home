import {
  Model3,
  ModelS,
  ModelY,
  ModelX,
  VideoExperiencie,
  Powerwall,
  Acessories,
} from "../components/sections/index";
import { Menu } from "../components/layout/index";

export const ComponentMain = () => {
  return (
    <>
      <Menu />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center">
          <Model3 />
        </div>
        <div className="snap-center">
          <ModelY />
        </div>
        <div className="snap-center">
          <ModelX />
        </div>
        <div className="snap-center">
          <ModelS />
        </div>
        <div className="snap-center">
          <VideoExperiencie />
        </div>
        <div className="snap-center">
          <Powerwall />
        </div>
        <div className="snap-center">
          <Acessories />
        </div>
      </main>
    </>
  );
};
