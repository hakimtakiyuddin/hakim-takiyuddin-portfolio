import type { NextComponentType } from "next";
import * as React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

const Education: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="education">
      <h1 className="text-center text-4xl font-bold md:text-center md:text-6xl">
        Education 🎓
      </h1>

      <div className="my-4 flex flex-row items-center justify-between">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <div className="experience-card relative z-10 mx-4 rounded-md border bg-gray-800 p-4 shadow-xl">
            <h1 className="text-grey-800 md:-center-10 absolute -top-10 text-4xl font-bold md:-top-10">
              2021 - 2018
            </h1>
            <h1 className="text-sm font-semibold">
              Bachelor of Software Engineering (Information System Development)
            </h1>
            <a
              href={"https://www.ukm.my/portalukm/"}
              className="text-sm text-gray-500"
            >
              National University Of Malaysia (UKM)
            </a>
            <p className="text-gray mt-4 text-sm text-slate-300">
              <span className="text-bold text-white">CGPA:</span>&nbsp; 3.76
            </p>
            <p className="text-gray text-sm text-slate-300 ">
              <span className="text-white">Core Subjects:</span>&nbsp; Software
              Requirement Engineering, Web Programming, Software Testing
            </p>
            <p className="text-gray text-sm text-slate-300 ">
              <span className="text-white">Awards:</span>&nbsp; Dean’s List,
              Team Selangor Ambassador, Golden Key Honor Society’s Member,
              Faculty Graduate Award 2020
            </p>
          </div>
        </motion.div>

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <div className="experience-card relative z-10 mx-4 rounded-md border bg-gray-800 p-4 shadow-xl">
            <h1 className="text-grey-800 md:-center-10 absolute -top-10 text-4xl font-bold md:-top-10">
              2018 - 2015
            </h1>
            <h1 className="text-sm font-semibold">
              Diploma in Computer Engineering
            </h1>
            <a
              href={"https://www.unimap.edu.my/index.php/en/"}
              className="text-sm text-gray-500"
            >
              Malaysia University of Perlis (UniMAP)
            </a>
            <p className="text-gray mt-4 text-sm text-slate-300">
              <span className="text-bold text-white">CGPA:</span>&nbsp; 3.75
            </p>
            <p className="text-gray text-sm text-slate-300 ">
              <span className="text-white">Core Subjects:</span>&nbsp; Digital
              System (I & II), Microcontroller (I & II), Database System, Object
              Oriented Programming, Electronic Circuits, Electronic
              Instrumentations
            </p>
            <p className="text-gray text-sm text-slate-300 ">
              <span className="text-white">Awards:</span>&nbsp; Dean’s List (4
              Semesters), Anugerah Buku Konvokesyen
            </p>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
