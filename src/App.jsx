import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    policeId: '',
    email: '',
    phone: '',
    loanAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.fullName,
        email: formData.email,
        message: `New Loan Application:\nPolice ID: ${formData.policeId}\nPhone: ${formData.phone}\nLoan Amount: ${formData.loanAmount}`,
      }),
    });

    if (response.ok) {
      alert('Application submitted successfully!');
      setFormData({ fullName: '', policeId: '', email: '', phone: '', loanAmount: '' });
    } else {
      alert('Failed to submit application.');
    }
  };

  const styles = {
    header: {
      backgroundColor: 'var(--primary)',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    nav: {
      display: 'flex',
      gap: '1rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    hero: {
      textAlign: 'center',
      padding: '5rem 1rem',
      background: 'var(--background)',
    },
    section: {
      padding: '3rem 1rem',
      textAlign: 'center',
    },
    sectionGray: {
      backgroundColor: '#f7f7f7',
      padding: '3rem 1rem',
      textAlign: 'center',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    input: {
      padding: '1rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '1.5rem',
    },
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>Brightyield</h1>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#" style={styles.navLink}>Loan Products</a>
          <a href="#" style={styles.navLink}>About Us</a>
          <Button>Apply Now</Button>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2>Financial Empowerment for Nigeria's Police Force</h2>
        <p>Fast, reliable, and confidential loans for those who serve.</p>
        <Button>Get a Loan</Button>
      </section>

      <section style={styles.section}>
        <h2>Our Loan Products</h2>
        <div style={styles.container}>
          <Card title="Personal Loan">
            <p>For your personal needs, from school fees to rent.</p>
          </Card>
          <Card title="Salary Advance">
            <p>Get an advance on your salary to cover urgent needs.</p>
          </Card>
          <Card title="Emergency Loan">
            <p>For unexpected emergencies and unforeseen circumstances.</p>
          </Card>
        </div>
      </section>

      <section style={styles.sectionGray}>
        <h2>How It Works</h2>
        <div style={styles.container}>
          <Card title="1. Apply Online">
            <p>Fill out our simple and secure online application form.</p>
          </Card>
          <Card title="2. Get Approved">
            <p>Our team will review your application and get back to you within 24 hours.</p>
          </Card>
          <Card title="3. Receive Funds">
            <p>Once approved, the funds will be disbursed to your account.</p>
          </Card>
        </div>
      </section>

      <section style={styles.section}>
        <h2>Apply for a Loan</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" style={styles.input} value={formData.fullName} onChange={handleChange} />
          <input type="text" name="policeId" placeholder="Police ID Number" style={styles.input} value={formData.policeId} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" style={styles.input} value={formData.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" style={styles.input} value={formData.phone} onChange={handleChange} />
          <input type="number" name="loanAmount" placeholder="Loan Amount (NGN)" style={styles.input} value={formData.loanAmount} onChange={handleChange} />
          <Button type="submit">Submit Application</Button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Brightyield. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
