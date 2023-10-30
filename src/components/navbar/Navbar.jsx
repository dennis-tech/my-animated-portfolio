import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"
import {motion} from "framer-motion" 
const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar */}
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}
            >
                Dennis Stanley
                </motion.span>
            <div className="social">
                <a href="https://github.com/dennis-tech" target="blank"><img src="/public/github icon.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/dennis-stanley-irungu-070600181/" target="blank"><img src="/public/linkedin.png" alt="" /></a>
                <a href="https://instagram.com/stanleysstar_?igshid=MzMyNGUyNmU2YQ==" target="blank"><img src="/public/instagram.png" alt="" /></a>  
                <a href="https://www.youtube.com/channel/UC0jhnuU18yXQsVuKeFTkumw" target="blank"><img src="/public/youtube.png" alt="" /></a>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
