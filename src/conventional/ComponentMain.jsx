import {
  Model3,
  ModelS,
  ModelY,
  ModelX,
  VideoExperiencie,
  Powerwall,
  Acessories,
} from "../components/sections/index";
import { Footer, Menu } from "../components/layout/index";
import { useEffect, useRef } from "react";

export const ComponentMain = () => {
  const aboutContentRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scrolled");
        }
      });
    }, options);
    const currentObserver = observerRef.current;
    if (aboutContentRef.current) {
      currentObserver.observe(aboutContentRef.current);
    }
    return () => {
      if (currentObserver && aboutContentRef.current) {
        currentObserver.unobserve(aboutContentRef.current);
      }
    };
  }, [aboutContentRef]);
  return (
    <>
      <Menu />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <div className="snap-center" ref={aboutContentRef}>
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
        <div className="snap-center xl:hidden md:hidden">
          <Footer />
        </div>
      </main>
    </>
  );
};
