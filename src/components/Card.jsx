import React from 'react';

const Card = ({ title, children, icon }) => {
  const style = {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    padding: '2rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    textAlign: 'center',
    flex: '1',
    minWidth: '280px',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: 'var(--primary-dark)',
    marginBottom: '1rem',
  };

  return (
    <div
      style={style}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 36px 0 rgba(31, 38, 135, 0.45)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
      }}
    >
      {icon && <div style={iconStyle}>{icon}</div>}
      <h3 style={{ marginBottom: '1rem', color: 'var(--primary-dark)' }}>{title}</h3>
      <p style={{ color: 'var(--text-dark)' }}>{children}</p>
    </div>
  );
};

export default Card;