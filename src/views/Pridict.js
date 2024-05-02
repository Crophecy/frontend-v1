import React, { useState } from 'react';
import './home.css';

const PredictionForm = () => {
    const [inputs, setInputs] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/ml/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
    
            const responseData = await response.text(); // Read response body as text
            console.log('Response Data:', responseData); // Log the response data
    
            const data = JSON.parse(responseData); // Parse the response data as JSON
            setPrediction(data.prediction);
    
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    

    return (
        <form onSubmit={handleSubmit} className="prediction-form">
            <input type="text" name="nitrogen" value={inputs.nitrogen} onChange={handleChange} placeholder="Nitrogen" />
            <input type="text" name="phosphorus" value={inputs.phosphorus} onChange={handleChange} placeholder="Phosphorus" />
            <input type="text" name="potassium" value={inputs.potassium} onChange={handleChange} placeholder="Potassium" />
            <input type="text" name="temperature" value={inputs.temperature} onChange={handleChange} placeholder="Temperature" />
            <input type="text" name="humidity" value={inputs.humidity} onChange={handleChange} placeholder="Humidity" />
            <input type="text" name="ph" value={inputs.ph} onChange={handleChange} placeholder="pH" />
            <input type="text" name="rainfall" value={inputs.rainfall} onChange={handleChange} placeholder="Rainfall" />
            <button type="submit">Predict</button>

            {prediction !== null && (
                <div className="prediction-result">
                    <h3>Prediction Result:</h3>
                    <p>{prediction}</p>
                </div>
            )}
        </form>
    );
};

export default PredictionForm;
