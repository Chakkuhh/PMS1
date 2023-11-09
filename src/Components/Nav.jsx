import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { Outlet,Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="navi">
      <Container>

        <NavbarBrand className='heading'><h1>PMS</h1></NavbarBrand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='flex-column gap-3 ' id="basic-navbar-nav">
          <Nav className="me-auto a">
            <Link className='a' to='/'> <div id='small-headings'>home</div></Link>
           <Link className='a' to='/login'> <div id='small-headings'>Admin</div ></Link>
           <Link className='a' to='/emplogin'> <div id='small-headings'>Employee</div></Link>
            <Link  className='a' to='/contact'><div  id='small-headings'>Contact Us</div ></Link>
           <Link className='a' to='/about'><div  className='a' id='small-headings'>About</div ></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default NavBar;