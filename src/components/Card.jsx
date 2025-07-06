import React from 'react';

const Card = ({ title, children }) => {
  const style = {
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

export default Card;
