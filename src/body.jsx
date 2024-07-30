import React, { useState } from 'react';

const DummyAlumni = [
    { name: 'Shivansh Sharma', email: 'shivansh.sharma12101998@gmail.com', company: 'Hero' },
    { name: 'Jane Smith', email: 'jane.smith@gmail.com', company: 'Company B', image: 'https://via.placeholder.com/50' },
    { name: 'Alice Johnson', email: 'alice.johnson@gmail.com', company: 'Company A', image: 'https://via.placeholder.com/50' },
  ];
  export const roles = [
    'Software Development Engineer',
    'Data Scientist',
    'Product Manager',
    'Data Analyst'   
  ];
const Body = () => {
  const [company, setCompany] = useState('');
  const [searchType, setSearchType] = useState('learn'); // 'learn' or 'prepare'
  const [message, setMessage] = useState('');
  const [foundAlumni, setFoundAlumni] = useState([]);

  const handleSearch = () => {
    const foundAlumni = DummyAlumni.filter(alumnus => alumnus.company.toLowerCase() === company.toLowerCase());

    if (foundAlumni.length > 0) {
      if (searchType === 'learn') {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLScK5dp7w2yk8vO2V1Hn-O2kXHfy0B8FZ3eT7JPRhNO5UbU9kg/viewform', '_blank');
      } else if (searchType === 'prepare') {
        window.open('https://example.com/interview-preparation', '_blank'); // Update with actual URL
      }
    } else {
      setMessage('No Alumni found in the company you searched for!');
    }
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <section style={styles.searchSection}>
          <h1 style={styles.heading}>Student Search</h1>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="learn"
                checked={searchType === 'learn'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You haven't applied yet and just want to know more about the company</span>
            </label>
            <label style={styles.radioLabel}>
              <input
                type="radio"
                value="prepare"
                checked={searchType === 'prepare'}
                onChange={(e) => setSearchType(e.target.value)}
                style={styles.radioInput}
              />
              <span style={styles.radioText}>You have received an interview call and want to know how to prepare for it</span>
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter company name...(First letter to be capital while searching)"
            style={styles.input}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <button style={styles.button} onClick={handleSearch}>Search</button>
          {message && <p style={styles.message}>{message}</p>}
          <div style={styles.contentRow}>
            {foundAlumni.length > 0 && (
              foundAlumni.map((alumnus, index) => (
                <div key={index} style={styles.textContainer}>
                  <p><strong>Name:</strong> {alumnus.name}</p>
                  <p><strong>Email:</strong> {alumnus.email}</p>
                  {alumnus.image && <img src={alumnus.image} alt={alumnus.name} style={styles.image} />}
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  searchSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(to right, #FF6F00, #003366)', // Gradient background from orange to blue
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '100%', // Full width of the container
    textAlign: 'center',
    fontFamily:'Coneria',
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#ffffff', // White text color for better contrast
    fontFamily:'Coneria',
  },
  input: {
    marginBottom: '20px',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    width: '100%',
    fontSize: '16px',
    fontFamily:'Coneria',
  },
  button: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    fontFamily:'Coneria',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#d9534f',
    fontFamily:'Coneria',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
    fontSize: '16px',
    width: '100%',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily:'Coneria',
  },
  radioInput: {
    marginRight: '10px',
    accentColor: '#007BFF',
    fontFamily:'Coneria',
  },
  radioText: {
    fontSize: '16px',
    fontFamily:'Coneria',
  },
  contentRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    width: '100%',
  },
  textContainer: {
    flex: '1 1 60%',
    margin: '0 20px',
    fontSize: '16px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    minHeight: '200px', // Ensure there's enough height
    overflow: 'visible', // Ensure content isn't clipped
    fontFamily:'Coneria',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    margin: '0',
    padding: '0', // Reset padding if needed
  },
  listItem: {
    color: '#003366',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Arial, sans-serif', // Ensure font is correctly applied
    marginBottom: '10px',
  },
  imageContainer: {
    flex: '1 1 40%',
    textAlign: 'center',
    marginTop: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
};

export default Body;
