import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-8 md:gap-12 lgl:gap-20 px-4 sm:px-6 lg:px-0"
    >
      {/* Education Section */}
      <div className="w-full ">
        {/* Section Title */}
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2 sm:gap-4 text-center lgl:text-left">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Education</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        {/* Education Timeline */}
        <div className="mt-6   lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 sm:gap-10">
          <ResumeCard
            title="BSc in Computer Science and Engineering"
            subTitle="Green University of Bangladesh (2021 - 2025)"
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="Mirpur College (2017 - 2019)"
          />
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Guzadia A. H. High School (2011 - 2017)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
