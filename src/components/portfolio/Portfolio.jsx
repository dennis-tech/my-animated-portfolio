import "./portfolio.scss"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [ 
  {
    id: 1,
    title: "Mobile Color Scheme Generator",
    img: "/public/color scheme web.png",
    desc: "A simple color scheme generator created using Javascript and the COLOR API to generate color schemes",
  },
  {
    id: 2,
    title: "My Learning Journey Website",
    img: "/public/my learning journey.png",
    desc: "A responsive website documenting my learning journey at Scrimba, created using HTML5, CSS3 AND JAVASCRIPT",
  },
  {
    id: 3,
    title: "Comment Endorsement  Mobile Web App",
    img: "/public/endorsement web app.png",
    desc: " An endorsement web application to give comments to someone, developed using HTML, CSS3, JAVASCRIPT AND FIREBASE",
  },
  {
    id: 4,
    title: "Music app",
    img: "https://images.pexels.com/photos/18388617/pexels-photo-18388617/free-photo-of-seagulls-perching-on-posts.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "A simple ecommerce website built with React and Commerce.js",
  },

];

const Single = ({item}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    // offset: ["start start", "end start"]

  });

  const y =useTransform(scrollYProgress, [0, 1], [-300, 300] );

  return <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref = {ref}>
          <img src={item.img} alt="" />
        </div>
        
        <motion.div className="textContainer" style={{y}}>
          <h2 >{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
      
    </div>
  </section>
};

const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref, 
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio" ref = {ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio