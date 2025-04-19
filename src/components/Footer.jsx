import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socials}>
        <a href="https://github.com/Naveen-Gupta99" target="_blank" rel="noopener noreferrer">
        <span className='footer'>Github</span>
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
        <span className='footer'>linkedIn</span>
        </a>
        <a href="https://instagram.com/naveen___9161/" target="_blank" rel="noopener noreferrer">
        <span className='footer'>Instagrame</span>
        </a>
        <a href="https://youtube.com/@MrCode99" target="_blank" rel="noopener noreferrer">
        <span className='footer'>YouTube</span>
        </a>
      </div>
      <p style={styles.text}>© {new Date().getFullYear()} Naveen Kr Gupta. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 1rem',
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    // marginBottom: '1rem',
  },
  icon: {
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  text: {
    fontSize: '0.9rem',
  },
};

export default Footer;
