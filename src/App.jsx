import Menu from "./components/Menu";
import Acessories from "./components/sections/Acessories";
import Model3 from "./components/sections/Model3";
import ModelS from "./components/sections/ModelS";
import ModelX from "./components/sections/ModelX";
import ModelY from "./components/sections/ModelY";
import Powerwall from "./components/sections/Powerwall";
import VideoExperiencie from "./components/sections/VideoExperiencie";

export function App() {
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
}
