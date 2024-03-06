import React, { useState } from 'react';
import data from "../../data/_guide.json";

const Guide = () => {
  const [expandedBox, setExpandedBox] = useState(null);

  const pageStyle = {
    backgroundColor: '#768350', // Yellow background color
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const cardContainerStyle = {
    margin:'auto',
    display: 'flex',
    width:'50%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor:'#E9E7DE',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for cards
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '150px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const expandedContentStyle = {
    marginTop: '10px',
  };

  const handleBoxClick = (index) => {
    setExpandedBox(expandedBox === index ? null : index);
  };

  return (
    <div style={pageStyle}>
      <h1>Guide Page</h1>
      <div style={cardContainerStyle}>
        {data.crop.map((crop, index) => (
          <div key={index} style={cardStyle} onClick={() => handleBoxClick(index)}>
            <img src={crop.src} alt={crop.title} style={imageStyle} />
            <h3>{crop.title}</h3>
           
            {expandedBox === index && (
              <div style={expandedContentStyle}>
               
                <p>{crop.description || "No description available"}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;