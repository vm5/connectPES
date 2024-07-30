import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade-slide">
      <footer style={styles.footer}>
        <p>&copy; {year} connect. All rights reserved</p>
        <div style={styles.links}>
          <a href="https://vm5.github.io/contributors" target="_blank" rel="noopener noreferrer" style={styles.link}>Contributors</a>
          <a href="https://vm5.github.io/terms/" target="_blank" rel="noopener noreferrer" style={styles.link}>Privacy Policies</a>
          <a href="https://vm5.github.io/contactus" target="_blank" rel="noopener noreferrer" style={styles.link}>Contact Us</a>
        </div>
        <div style={styles.additionalContent}>
          <p>connectPES : Your go-to platform to connect with alumni of PES University. Stay connected with your queries and concerns and stay in touch!</p>
        </div>
      </footer>
    </CSSTransition>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #FF6F00, #003366)', // Gradient background from orange to blue
    borderTop: '1px solid #ccc',
    position: 'relative',
    bottom: 0,
    width: '100%',
    fontWeight: 'bold',
    fontFamily: 'Coneria',
    color: 'white', // Changed to white for better contrast against the gradient
    fontSize: '20px',
  },
  links: {
    marginTop: '10px',
    fontFamily:'Coneria',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 'normal',
    color: 'lightblue', // Changed to light blue for better visibility
    fontFamily:'Coneria',
  },
  additionalContent: {
    marginTop: '20px',
    fontWeight: 'normal',
    fontFamily:'Coneria',
  }
};

export default Footer;
