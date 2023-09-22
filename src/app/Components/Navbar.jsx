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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src="/static/logo.png" width={70} height={70} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" href="#home-section">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/projects">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};



