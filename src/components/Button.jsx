import React from 'react';

const Button = ({ children, onClick, type = 'button', primary = false }) => {
  const baseStyle = {
    padding: '12px 24px',
    border: 'none',
    borderRadius: 'var(--border-radius)',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: 'var(--shadow)',
  };

  const primaryStyle = {
    ...baseStyle,
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
  };

  const secondaryStyle = {
    ...baseStyle,
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
    border: `1px solid var(--primary)`,
  };

  return (
    <button
      style={primary ? primaryStyle : secondaryStyle}
      onClick={onClick}
      type={type}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
    >
      {children}
    </button>
  );
};

export default Button;