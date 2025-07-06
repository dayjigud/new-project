import React, { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to send message.');
    }
  };

  const styles = {
    header: {
      backgroundColor: 'var(--primary)',
      color: 'var(--text)',
      textAlign: 'center',
      padding: '1rem',
    },
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
    },
    services: {
      padding: '2rem 1rem',
      backgroundColor: 'var(--accent)',
    },
    servicesContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    about: {
      padding: '2rem 1rem',
      backgroundColor: 'var(--background)',
      textAlign: 'center',
    },
    contact: {
      padding: '2rem 1rem',
      textAlign: 'center',
    },
    contactForm: {
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '0.8rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    },
    textarea: {
      padding: '0.8rem',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
      minHeight: '100px',
    },
    footer: {
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
    },
  };

  return (
    <div>
      <header style={styles.header}>
        <h1>SafeTrip</h1>
      </header>

      <section style={styles.hero}>
        <h2>Your Reliable Transportation Partner</h2>
        <p>Safe, comfortable, and affordable transport services across Nigeria.</p>
        <Button>Book Now</Button>
      </section>

      <section style={styles.services}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
        <div style={styles.servicesContainer}>
          <Card title="Interstate Travel">
            <p>Travel between major cities in Nigeria.</p>
          </Card>
          <Card title="City Taxi">
            <p>Your everyday taxi service within the city.</p>
          </Card>
          <Card title="Logistics">
            <p>Reliable and timely delivery of your goods.</p>
          </Card>
          <Card title="Car Rentals">
            <p>Rent a car for your personal or business needs.</p>
          </Card>
        </div>
      </section>

      <section style={styles.about}>
        <h2>About Us</h2>
        <p>We are committed to providing the best transportation experience in Nigeria. Our drivers are professional, and our vehicles are top-notch.</p>
      </section>

      <section style={styles.contact}>
        <h2>Contact Us</h2>
        <form style={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            style={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 SafeTrip. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;