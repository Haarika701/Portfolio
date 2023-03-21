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
    <nav role="navigation">
      <ul className='nav justify-content-end py-4 px-5'>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active text-md' href="/">Home</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/about">About</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/contact">Contact</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/projects">Projects</Link>
        </li>
        <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' href="/resume">Resume</Link>
        </li>
      </ul>
    </nav >
  )
}

