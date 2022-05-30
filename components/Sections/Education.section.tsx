import type { NextComponentType } from "next";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { RoughNotation } from "react-rough-notation";
import { motion } from "framer-motion";

const Education: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="education">
      <h1 className="text-center text-5xl font-bold md:text-center md:text-6xl">
        Education 🎓
      </h1>

      <Grid container spacing={2} className="my-10 px-3 ">
        <Grid item xs={6}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div className="experience-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:bg-gray-800">
              <h1 className="dark:text-grey-800 md:-center-10 absolute -top-10 text-4xl font-bold text-gray-500 md:-top-10">
                2021 - 2018
              </h1>
              <h1 className="text-sm font-semibold">
                Bachelor of Software Engineering (Information System
                Development)
              </h1>
              <a href={"#"} className="text-sm text-gray-500">
                National University Of Malaysia (UKM)
              </a>
              <p className="text-gray mt-4 text-sm text-slate-300">
                <span className="text-bold text-white">CGPA:</span>&nbsp; 3.76
              </p>
              <p className="text-gray text-sm text-slate-300 ">
                <span className="text-white">Core Subjects:</span>&nbsp;
                Software Requirement Engineering, Web Programming, Software
                Testing
              </p>
              <p className="text-gray text-sm text-slate-300 ">
                <span className="text-white">Awards:</span>&nbsp; Dean’s List,
                Team Selangor Ambassador, Golden Key Honor Society’s Member,
                Faculty Graduate Award 2020
              </p>
            </div>
          </motion.div>
        </Grid>

        <Grid item xs={6}>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <div className="experience-card relative z-10 mx-4 rounded-md border bg-white p-4 shadow-xl dark:bg-gray-800">
              <h1 className="dark:text-grey-800 md:-center-10 absolute -top-10 text-4xl font-bold text-gray-500 md:-top-10">
                2018 - 2015
              </h1>
              <h1 className="text-sm font-semibold">
                Diploma in Computer Engineering
              </h1>
              <a href={"#"} className="text-sm text-gray-500">
                Malaysia University of Perlis (UniMAP)
              </a>
              <p className="text-gray mt-4 text-sm text-slate-300">
                <span className="text-bold text-white">CGPA:</span>&nbsp; 3.75
              </p>
              <p className="text-gray text-sm text-slate-300 ">
                <span className="text-white">Core Subjects:</span>&nbsp; Digital
                System (I & II), Microcontroller (I & II), Database System,
                Object Oriented Programming, Electronic Circuits, Electronic
                Instrumentations
              </p>
              <p className="text-gray text-sm text-slate-300 ">
                <span className="text-white">Awards:</span>&nbsp; Dean’s List (4
                Semesters), Anugerah Buku Konvokesyen
              </p>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            </div>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
