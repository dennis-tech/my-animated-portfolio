import "./about.scss"
import { motion } from "framer-motion";

const variants = {
    initial:{
      y:500,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.5,
        staggerChildren: 0.1,
      },
    },
  };



const About = () => {
  return (
    <div className="about">
        <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>About Me</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Meet Dennis Stanley! I am a Front end developer, based in Kenya. In my free time, I enjoy creating funny videos and learning new stuffs, having fun with friends, and travelling.</h2>
        </motion.div>
        <motion.div className="item" variants={variants}>
        <h2>My Professional skills include HTML, CSS, JAVASCRIPT AND REACTJS </h2>
        </motion.div>
        
      </motion.div>
    </div>
  )
}

export default About
