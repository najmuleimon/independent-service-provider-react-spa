import React from 'react';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Home</NavLink>
                    <NavLink to="/about-me" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>About Me</NavLink>
                    <NavLink to="/checkout" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Checkout</NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Blogs</NavLink>
                    {
                        user ? <button className='nav-link' onClick={handleSignOut}>Sign out</button> :
                        <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Login</NavLink>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;