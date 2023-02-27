
//import "./navbar.css";
//import { FaFacebookMessenger, FaGithub, FaGoogle } from "react-icons/fa";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'bootstrap/Container';
// import bootstrap from 'bootstrap'
// import {Nav, Navbar, Container} from 'bootstrap';
import { Outlet, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@900&display=swap" rel="stylesheet"></link>
      </head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Antiques
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/antique" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/collection' className="nav-link" >
                  Collection
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/item" className="nav-link" >
                  Limited Offer
                </Link>
              </li>
              
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-success" type="submit">
                Contact
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
      
    </>
  );
};
export default Navbar;
