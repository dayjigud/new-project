import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import ApplyIcon from './components/icons/ApplyIcon';
import ApprovalIcon from './components/icons/ApprovalIcon';
import FundsIcon from './components/icons/FundsIcon';

// Style definitions moved to the top for clarity and to prevent reference errors.
const styles = {
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1100px',
    margin: 'auto',
    padding: '0 1.5rem',
  },
  logo: {
    color: 'var(--primary-dark)',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navLink: {
    color: 'var(--text-dark)',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.2s ease',
  },
  hero: {
    backgroundColor: 'var(--primary-light)',
    color: 'var(--primary-dark)',
    textAlign: 'center',
    padding: '6rem 1.5rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    color: 'var(--text-light)',
  },
  section: {
    padding: '5rem 1.5rem',
  },
  sectionGray: {
    backgroundColor: 'var(--white)',
    padding: '5rem 1.5rem',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
    color: 'var(--primary-dark)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1100px',
    margin: 'auto',
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
    borderRadius: 'var(--border-radius)',
    border: '1px solid #ccc',
    width: '100%',
    fontSize: '1rem',
  },
  footer: {
    backgroundColor: 'var(--primary-dark)',
    color: 'var(--white)',
    textAlign: 'center',
    padding: '2rem 1.5rem',
  },
  container: {
    maxWidth: '1100px',
    margin: 'auto',
    padding: '0 1.5rem',
  }
};

// Component definitions are now placed before the main App component.
const Header = () => (
  <header style={styles.header}>
    <div style={styles.headerContainer}>
      <h1 style={styles.logo}>Brightyield</h1>
      <nav style={styles.nav}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#products" style={styles.navLink}>Products</a>
        <a href="#apply" style={styles.navLink}><Button primary>Apply Now</Button></a>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="home" style={styles.hero}>
    <div style={styles.container}>
      <h2 style={styles.heroTitle}>Financial Empowerment for Nigeria's Finest</h2>
      <p style={styles.heroSubtitle}>Fast, reliable, and confidential loans designed for the brave men and women of the Nigerian Police Force.</p>
      <Button primary>Get a Loan Today</Button>
    </div>
  </section>
);

const LoanProductsSection = () => (
  <section id="products" style={styles.section}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Our Loan Products</h2>
      <div style={styles.grid}>
        <Card title="Personal Loan" icon={<ApplyIcon />}>
          For your personal needs, from covering school fees to handling family emergencies.
        </Card>
        <Card title="Salary Advance" icon={<ApprovalIcon />}>
          Bridge the gap until your next paycheck with a quick and easy salary advance.
        </Card>
        <Card title="Equipment Loan" icon={<FundsIcon />}>
          Get the funds you need for essential gear and equipment to perform your best.
        </Card>
      </div>
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section style={styles.sectionGray}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>A Simple, Transparent Process</h2>
      <div style={styles.grid}>
        <Card title="1. Apply Online" icon={<ApplyIcon />}>
          Fill out our secure online form in minutes. It's fast, easy, and completely confidential.
        </Card>
        <Card title="2. Fast Approval" icon={<ApprovalIcon />}>
          Our dedicated team reviews your application promptly, with decisions typically made within 24 hours.
        </Card>
        <Card title="3. Receive Funds" icon={<FundsIcon />}>
          Once approved, your funds are disbursed directly to your bank account without delay.
        </Card>
      </div>
    </div>
  </section>
);

const AboutNpfSection = () => (
  <section style={styles.section}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>About the Nigerian Police Force</h2>
      <p style={{ ...styles.heroSubtitle, textAlign: 'left', marginBottom: '1.5rem' }}>
        Founded in 1930, the Nigeria Police Force (NPF) is the principal law enforcement and the lead security agency in Nigeria. With a force of over 371,800, it is one of the largest police forces in Africa. The NPF is a federal agency with a centralized command structure.
      </p>
      <p style={{ ...styles.heroSubtitle, textAlign: 'left' }}>
        <strong>Our Mission:</strong> To provide safety and security in Nigeria, to protect the rights of all persons, and to build a more peaceful and just society. We are committed to upholding the highest standards of integrity, professionalism, and respect for human rights.
      </p>
    </div>
  </section>
);

const ApplicationSection = ({ formData, handleChange, handleSubmit }) => (
  <section id="apply" style={{...styles.section, backgroundColor: 'var(--white)'}}>
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Apply for Your Loan Today</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" style={styles.input} value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="policeId" placeholder="Police ID Number" style={styles.input} value={formData.policeId} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" style={styles.input} value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" style={styles.input} value={formData.phone} onChange={handleChange} required />
        <input type="number" name="loanAmount" placeholder="Loan Amount (NGN)" style={styles.input} value={formData.loanAmount} onChange={handleChange} required />
        <Button type="submit" primary>Submit Application</Button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <p>&copy; 2025 Brightyield Financial Services. All Rights Reserved.</p>
      <p>Built with care for our nation's protectors.</p>
    </div>
  </footer>
);


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
        message: `New Loan Application from ${formData.fullName}:\nPolice ID: ${formData.policeId}\nPhone: ${formData.phone}\nLoan Amount: NGN ${formData.loanAmount}`,
      }),
    });

    if (response.ok) {
      alert('Application submitted successfully! We will be in touch shortly.');
      setFormData({ fullName: '', policeId: '', email: '', phone: '', loanAmount: '' });
    } else {
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <LoanProductsSection />
        <HowItWorksSection />
        <AboutNpfSection />
        <ApplicationSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
