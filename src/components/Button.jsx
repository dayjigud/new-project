import React from 'react';

const Button = ({ children, onClick }) => {
  const style = {
    backgroundColor: 'var(--primary)',
    color: 'var(--text)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
