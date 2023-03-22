import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useEffect } from 'react'

export default function Navbar() {
  // const [scrolled, setScrolled] = React.useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;

  //   if (offset > 200) {
  //     setScrolled(true);
  //   }
  //   else {
  //     setScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // })

  return (
    <nav className='justify-content-end py-3 py-4' >

      <ul className='nav justify-content-end ' role="navigation">
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active text-md' style={{
            color: "#000000"
          }} href="/">Home</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/about" style={{
            color: "#000000"
          }}>About</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/contact" style={{
            color: "#000000"
          }}>Contact</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/projects" style={{
            color: "#000000"
          }}>Projects</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/resume" style={{
            color: "#000000"
          }}>Resume</Link>
        </li>
      </ul >

    </nav >
  )
}

