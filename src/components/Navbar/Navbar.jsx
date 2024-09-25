import React,{useState} from 'react'
import styles from "./Navbar.module.css";
// import  useState  from 'react';
import { getImageUrl } from './../../utils';

const Navbar = () => {
    const[menuOpen,setMenuOpen]= useState(false)
  return (
    <nav className={styles.Navbar}> <a  className={styles.title}href="/">Portfolio</a>
<div className={styles.menu}>
    <img className={styles.menuBtn}src={ menuOpen ? getImageUrl("nav/closeIcon.png"):
        getImageUrl("nav/menuIcon.png")}
        onClick={() => setMenuOpen(!menuOpen)}>
    </img>
    <ul className={`${styles.menutitle} ${menuOpen && styles.menuOpen}  `}
    onClick={()=>setMenuOpen(false)}>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#Skills">Skills</a>
        </li>
        <li>
            <a href="#Projects">Projects</a>
        </li>
        <li>
            <a href="#Contact">Contact</a>
        </li>
    </ul>
</div>
    </nav>
  )
}

// // export default Navbar
// import React, { useState } from 'react';
// import styles from "./Navbar.module.css";
// import { getImageUrl } from './../../utils';
// import { Link } from 'react-scroll';  // Import Link from react-scroll

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <nav className={styles.Navbar}>
//             <a className={styles.title} href="/">Portfolio</a>
//             <div className={styles.menu}>
//                 <img
//                     className={styles.menuBtn}
//                     src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 />
//                 <ul className={`${styles.menutitle} ${menuOpen && styles.menuOpen}`}
//                     onClick={() => setMenuOpen(false)}>
//                     <li>
//                         <Link
//                             to="about"
//                             smooth={true}
//                             duration={500}
//                             offset={-70}  // Adjust the scroll position if needed
//                         >
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="experience"
//                             smooth={true}
//                             duration={500}
//                             offset={-70}
//                         >
//                             Experience
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="projects"
//                             smooth={true}
//                             duration={500}
//                             offset={-70}
//                         >
//                             Projects
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                             to="contact"
//                             smooth={true}
//                             duration={500}
//                             offset={-70}
//                         >
//                             Contact
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

 export default Navbar;
