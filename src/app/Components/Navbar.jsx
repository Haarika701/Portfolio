import Link from 'next/link'
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image src="/static/logo.png" width={70} height={70} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="main-navbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
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
            <li className="nav-item">
              <Link className="nav-link" href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


