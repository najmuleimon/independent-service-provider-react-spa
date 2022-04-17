import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-center'>
            <p>Copyright &copy; All right reserved by Najmul {year}</p>
        </footer>
    );
};

export default Footer;