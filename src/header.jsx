import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './animations.css';

const Header = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <CSSTransition in={true} appear={true} timeout={4000} classNames="fade-slide">
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoContainer}>
            <img src="/logo-removebg-preview.png" alt="connectPES Logo" style={styles.logo} />
          </div>
          <span style={styles.time}>{currentTime}</span>
        </div>
        <div style={styles.contentRow}>
          <div style={styles.textContainer}>
            <ul style={styles.list}>
              <li style={styles.listItem}>connectPES is a platform designed to bridge the gap between current students of the university who are eligible for placements and want to seek necessary guidance and support from PES alumni who happen to work in the same organization as the one they are wishing to apply for.</li>
              <li style={styles.listItem}>Whether you are a student looking to connect with alumni working in companies you are applying to, or an alumni wishing to provide guidance and support, connectPES is here to help.</li>
              <li style={styles.listItem}>Join us to foster connections and support the next generation of professionals.</li>
              <li style={styles.listItem}>Our platform not only provides students with valuable networking opportunities but also allows alumni to give back to the community by sharing their experiences and insights.</li>
              <li style={styles.listItem}>Together, we can create a supportive environment where everyone thrives and achieves their career goals.</li>
            </ul>
          </div>
          <div style={styles.imageContainer}>
            <img src="https://www.pessat.com/img/video-cover.jpg" alt="PES Campus" style={styles.image} />
          </div>
        </div>
      </header>
    </CSSTransition>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #FF6F00, #003366)', // Gradient background from orange to blue
    borderBottom: '2px solid #3399ff', // Light blue border
    fontSize: '32px',
    fontFamily: 'Coneria',
    color: '#003366', // Dark blue text color
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    position: 'relative',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    paddingBottom: '20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  time: {
    fontSize: '18px',
    color: '#66ccff', // Light blue time text
  },
  contentRow: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '20px',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 20px',
  },
  textContainer: {
    flex: '1 1 40%',
    margin: '0 20px',
    fontSize: '16px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2', // Light gray background for text container
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  listItem: {
    color: '#003366', // Dark blue text color
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Coneria',
    marginBottom: '10px',
  },
  imageContainer: {
    flex: '1 1 40%',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
};

export default Header;
