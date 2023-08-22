import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Dear Henry",
          "Can you get in touch with me on Skype?",
          "You can check my skype id on resume page.",
          "If you help me with that, I will do my best."
          // "Software Developer",
          // "Freelancer",
          // "Web Developer",
          // "Web Application Developer",
          // "ArcGIS Expert",
          // "Autodesk AutoCAD Expert"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
