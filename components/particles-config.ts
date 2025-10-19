// components/particles-config.ts

import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  background: {
    color: {
      value: '#000000', // Set a solid black background
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse', // Pushes particles away from the cursor
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["#FFFFFF", "#63e", "#007BFF"], // A palette of colors for the particles
    },
    links: {
      enable: false, // We don't want lines connecting them
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'out',
      },
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50, // Number of particles
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};