import React, { useState } from 'react';

function MyForm() {
  const [inputData, setInputData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await sendData({ input: inputData });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input
          type="text"
          value={inputData}
          onChange={e => setInputData(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

async function sendData(inputData) {
  const response = await fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export default MyForm;