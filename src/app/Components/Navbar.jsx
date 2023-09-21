import Link from 'next/link'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
// // import React, { useEffect } from 'react'

export default function Navbar() {
  //   // const [scrolled, setScrolled] = React.useState(false);

  //   // const handleScroll = () => {
  //   //   const offset = window.scrollY;

  //   //   if (offset > 200) {
  //   //     setScrolled(true);
  //   //   }
  //   //   else {
  //   //     setScrolled(false);
  //   //   }
  //   // }
  //   // useEffect(() => {
  //   //   window.addEventListener('scroll', handleScroll)
  //   // })

  return (
    <>

      {/* // <nav class="site-nav js-site-navbar mb-5 site-navbar-target scrolled awake">
// <div class="container">
// <div class="site-navigation text-center">
// <a href="index.html" class="d-block text-center float-left logo">JA</a>
// <ul class="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
// <li class="active"><a href="#home-section" class="nav-link">Home</a></li>
// <li class="has-children">
// <a href="#" class="nav-link">Dropdown</a>
// <ul class="dropdown">
// <li><a href="#testimonials-section" class="nav-link">Testimonials</a></li>
// <li class="has-children">
// <a href="#">Menu Two</a>
// <ul class="dropdown">
// <li><a href="#" class="nav-link">Sub Menu One</a></li>
// <li><a href="#" class="nav-link">Sub Menu Two</a></li>
// <li><a href="#" class="nav-link">Sub Menu Three</a></li>
// </ul>
// </li>
// <li><a href="#" class="nav-link">Menu Three</a></li>
// </ul>
// </li>
// <li><a href="#about-section" class="nav-link">About</a></li>
// <li><a href="#portfolio-section" class="nav-link">Portfolio</a></li> */}
      {/* // <li><a href="#services-section" class="nav-link">Services</a></li>
// <li><a href="#resume-section" class="nav-link">Resume</a></li>
// <li><a href="#blog-section" class="nav-link active">Blog</a></li>
// <li><a href="#contact-section" class="nav-link">Contact</a></li>
// </ul> */}
      {/* // <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none" data-toggle="collapse" data-target="#main-navbar">
// <span></span>
// </a>
// </div>
// </div>
// </nav> */}
      <nav className='navbar navbar-md navbar-light' >
        <div className="navbar-brand" href="#"><Image src="/static/logo.png" width={70} height={70} /></div>

        <ul className='nav justify-content-center my-4' role="navigation">
          <li className='nav-item '>
            <Link className='nav-link active text-md' href="/" style={{
              color: "#000000"
            }}>Home</Link>
          </li>
          <li className='nav-item '>
            <Link className='nav-link active' href="/about" style={{
              color: "#000000"
            }}>About</Link>
          </li>

          <li className='nav-item '>
            <Link className='nav-link' href="/projects" style={{
              color: "#000000"
            }}>Projects</Link>

          </li>
        </ul >

      </nav >
    </>
  )
}
/* 


//  href="/resume"
 
//  <li className='nav-item py-3 py-lg-4'>
//           <Link className='nav-link active' style={{
//             color: "#000000"
//           }}>Contact</Link>
//         </li>*/
