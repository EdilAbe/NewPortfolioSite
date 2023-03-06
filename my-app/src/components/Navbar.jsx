import React,{useState}  from 'react';
import { motion } from "framer-motion"
import {MdMenu, MdClose} from "react-icons/md";

import "./Navbar.scss"

const Navbar = () =>{
    const [toggle, setToggle] = useState(false);

    return (
        
            <nav className ="navbar">
                
                <div className="navbar-logo">
        <h3>Edilawit Tsehay</h3>
      </div>
      <ul className="navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="navbar-list" key={`${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-menu">
        <MdMenu onClick={() => setToggle(true)} /> 

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <MdClose onClick={() => setToggle(false)} /> 
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>     
                
                </nav>
        )
}

export default Navbar;