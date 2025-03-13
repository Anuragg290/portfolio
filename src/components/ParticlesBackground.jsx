import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Loaded");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#000000" },
        particles: {
          number: {
            value: 100,
            density: { enable: true, value_area: 800 },
          },
          color: { value: ["#ffffff", "#00ffcc", "#ff66ff"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.6,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.3,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: { enable: false },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
            triangles: { enable: false },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: {
              distance: 130, 
              duration: 0.6, 
              speed: 1.2, 
            },
            push: {
              quantity: 2, 
              duration: 0.3, 
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
