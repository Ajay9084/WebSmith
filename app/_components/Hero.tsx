"use client";

import { Button } from "@/components/ui/button";

import {
  ArrowUp,
  HomeIcon,
  ImagePlus,
  Key,
  LayoutDashboard,
  User,
} from "lucide-react";

import { useState } from "react";

const suggestions = [
  {
    label: "Dashboard",

    prompt:
      "Create an analytics dashboard to track customers and revenue data for a SaaS",

    icon: LayoutDashboard,
  },

  {
    label: "SignUp Form",
    prompt:
      "Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox",
    icon: Key,
  },

  {
    label: "Hero",
    prompt:
      "Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect, subtitle, CTA, small social proof and an image.",
    icon: HomeIcon,
  },

  {
    label: "User Profile Card",
    prompt:
      "Create a modern user profile card component for a social media website",
    icon: User,
  },
];

function Hero() {
  const [userInput, setUserInput] = useState<string>();
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center">
      {/* Header&Description */}

      <h2 className=" font-bold text-6xl">What Should We Design?</h2>

      <p className="mt-2 text-xl text-gray-500">
        Generate Edit and Explore design with AI, Export code as well
      </p>

      {/* InputBox */}

      <div className="w-full max-w-2xl p-5 border mt-5 rounded-2xl ">
        <textarea
          placeholder="Describe your page design..."
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          className="w-full h-24 focus:outline-none focus:ring-0 resize-none"
        />

        <div className="flex justify-between items-center">
          <Button variant={"ghost"}>
            <ImagePlus />
          </Button>

          <Button>
            <ArrowUp />
          </Button>
        </div>
      </div>

      {/* Suggestions */}

      <div className="mt-4 flex gap-5">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant={"outline"}
            onClick={() => setUserInput(suggestion.prompt)}
          >
            <suggestion.icon />

            {suggestion.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Hero;

// "use client"

// import { Button } from "@/components/ui/button"
// import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from "lucide-react"
// import { useState, useCallback } from "react";
// import { motion, type Variants } from "framer-motion";

// // Particle imports
// import Particles from "react-tsparticles";
// import type { Engine } from "tsparticles-engine";
// import { loadSlim } from "tsparticles-slim";
// import { particlesConfig } from "@/components/particles-config"; // Adjust path if needed

// const suggestions = [
//   // ... (same as before)
//   {
//     label: 'Dashboard',
//     prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
//     icon: LayoutDashboard
//   },
//   {
//     label: 'SignUp Form',
//     prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
//     icon: Key
//   },
//   {
//     label: 'Hero',
//     prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect, subtitle, CTA, small social proof and an image.',
//     icon: HomeIcon
//   },
//   {
//     label: 'User Profile Card',
//     prompt: 'Create a modern user profile card component for a social media website',
//     icon: User
//   }
// ];

// // Main container variants (no change)
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// // Item variants (no change)
// const itemVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.6, -0.05, 0.01, 0.99],
//     },
//   },
// };

// // NEW: Variants for the text animation container
// const textContainerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: (i: number = 1) => ({
//     opacity: 1,
//     transition: { staggerChildren: 0.05, delayChildren: i * 0.1 },
//   }),
// };

// // NEW: Variants for each letter/word
// const textCharacterVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       damping: 12,
//       stiffness: 200,
//     },
//   },
// };

// function Hero() {
//   const [userInput, setUserInput] = useState<string>();

//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine);
//   }, []);

//   // Split text into arrays for animation
//   const headingText = Array.from("What Should We Design?");
//   const paragraphText = "Generate, edit, and explore stunning designs with AI. Export your creations as production-ready code.".split(" ");

//   return (
//     <div className="relative flex flex-col items-center h-[80vh] justify-center overflow-hidden">
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={particlesConfig}
//         className="absolute top-0 left-0 -z-10 h-full w-full"
//       />

//       <motion.div
//         className="flex flex-col items-center"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* MODIFIED: Header with character-by-character animation */}
//         <motion.h2
//           variants={textContainerVariants}
//           initial="hidden"
//           animate="visible"
//           className="font-bold text-5xl md:text-6xl text-center"
//         >
//           {headingText.map((char, index) => (
//             <motion.span
//               key={index}
//               variants={textCharacterVariants}
//               className="inline-block bg-gradient-to-r from-neutral-50 via-slate-400 to-neutral-50 bg-[length:200%_100%] bg-clip-text text-transparent"
//             >
//               {char === " " ? "\u00A0" : char}
//             </motion.span>
//           ))}
//         </motion.h2>

//         {/* MODIFIED: Paragraph with word-by-word animation */}
//         <motion.p
//           variants={textContainerVariants}
//           initial="hidden"
//           animate="visible"
//           className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl text-center"
//         >
//           {paragraphText.map((word, index) => (
//             <motion.span
//               key={index}
//               variants={textCharacterVariants}
//               className="inline-block"
//             >
//               {word}&nbsp;
//             </motion.span>
//           ))}
//         </motion.p>

//         {/* The rest of your content remains the same */}
//         <motion.div
//           variants={itemVariants}
//           className="w-full max-w-2xl p-2 border border-slate-700 bg-black/30 backdrop-blur-sm mt-8 rounded-2xl shadow-lg transition-all duration-300 focus-within:border-slate-500 focus-within:shadow-blue-500/20"
//         >
//           <textarea
//             placeholder="Describe your design"
//             value={userInput}
//             onChange={(event) => setUserInput(event.target.value)}
//             className="w-full h-24 p-3 bg-transparent focus:outline-none focus:ring-0 resize-none text-white placeholder:text-gray-500"
//           />
//           <div className="flex justify-between items-center p-2">
//             <Button variant={'ghost'} className="hover:bg-slate-800"><ImagePlus className="text-gray-400" /></Button>
//             <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl"><ArrowUp /></Button>
//           </div>
//         </motion.div>

//         <motion.div
//           variants={itemVariants}
//           className="mt-8 flex flex-wrap gap-4 justify-center"
//         >
//           {suggestions.map((suggestion, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Button
//                 variant={"outline"}
//                 className="bg-slate-900/80 border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-white hover:border-slate-600"
//                 onClick={() => setUserInput(suggestion.prompt)}
//               >
//                 <suggestion.icon className="mr-2 h-4 w-4" />
//                 {suggestion.label}
//               </Button>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default Hero;
