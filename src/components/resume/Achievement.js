import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { certificate1, Coursera } from "../../assets/index"; // Ensure correct import

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        {/* Section Title */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 text-center lgl:text-left">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Achievements</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>

        {/* Certificates List */}
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          {/* Certificate 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <ResumeCard
              title="HTML, CSS, and JavaScript for Web Developers"
              subTitle="Johns Hopkins University — Coursera"
              result="Completed"
              des="Certificate awarded for completing a comprehensive course on web development fundamentals."
            />
            <img
              src={Coursera}
              alt="Coursera Certificate"
              className="max-w-full sm:max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>

          {/* Certificate 2 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <ResumeCard
              title="Full Stack Development"
              subTitle="GreatStack"
              result="Completed"
              des="Certificate awarded for completing the Full Stack Development program."
            />
            <img
              src={certificate1}
              alt="GreatStack Certificate"
              className="max-w-full sm:max-w-[250px] md:max-w-[300px] h-auto rounded-lg shadow-md border border-gray-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
