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
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"> </p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        
          <ResumeCard
            title="JOHNS HOPKINS UNIVERSITY"
            subTitle="Coursera"
            result="Success"
            des="This certificate was awarded by Coursera for completing the HTML, CSS, and Javascript for Web Developer."
          />
            <img src={Coursera} alt="Coursera Certificate"  />
         
          <ResumeCard
            title="GreatStact"
            subTitle="This certificate is proudly awarded to Sanzith Alam"
            result="Success"
            des="This certificate was awarded by GreatStact for completing of Full Stact  "
          />
           <img src={certificate1} alt="Certificate 1"  />
         
        </div>
      </div> 
    </motion.div>
  );
};

export default Achievement;
