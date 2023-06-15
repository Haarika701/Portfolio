import Link from 'next/link'
import Image from 'next/image'
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
    <>
      <nav className='navbar navbar-sm navbar-light' >
        <div className="navbar-brand" href="#"><Image src="/static/logo.png" width={70} height={70} /></div>
        <div className=''>
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
              <Link className='nav-link ' href="/projects" style={{
                color: "#000000"
              }}>Projects</Link>

            </li>
          </ul >
        </div>
      </nav >
    </>
  )
}
/* 


 href="/resume"
 
 <li className='nav-item py-3 py-lg-4'>
          <Link className='nav-link active' style={{
            color: "#000000"
          }}>Contact</Link>
        </li>*/
