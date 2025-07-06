import React from 'react';

const Card = ({ title, children, icon }) => {
  const style = {
    backgroundColor: 'var(--white)',
    padding: '2rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
    textAlign: 'center',
    flex: '1',
    minWidth: '280px',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: 'var(--primary)',
    marginBottom: '1rem',
  };

  return (
    <div
      style={style}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.15)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = 'var(--shadow)';
      }}
    >
      {icon && <div style={iconStyle}>{icon}</div>}
      <h3 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>{title}</h3>
      <p style={{ color: 'var(--text-light)' }}>{children}</p>
    </div>
  );
};

export default Card;