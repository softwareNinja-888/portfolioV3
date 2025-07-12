import { motion } from "framer-motion";
import { Button } from "./Button";


export function Introduction() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const toSection = (section) => {
    const el = document.getElementById(`${section}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-start w-full">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 w-full lg:w-10/12 lg:mt-0 text-white mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="items-end text-3xl font-libre "
        >
          Hello, my name is,
          <br />
          <motion.span
            variants={itemVariants}
            className="text-[38px] sm:text-[45px] md:text-[50px] text-primary font-quickSand"
          >
            Bayanda Dlamini
          </motion.span>
          <br />
          <motion.span
            variants={itemVariants}
            className="text-[16px] sm:text-[18px] text-white/70 font-quickSand"
          >
            Front-end Developer
          </motion.span>

          <div className="w-24 mt-4 mx-auto lg:mx-0">
            <hr className="h-1 bg-primary border-0" />
          </div>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button onClick={() => toSection("contact")} text="Get In Touch " width='w-52' classNew="font-raleway hover:bg-transparent hover:rounded-lg transition-all duration-500 hover:scale-105 py-3"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
