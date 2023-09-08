import React, { useState } from 'react';

function PostOperation() {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const postData = async () => {
    // Prepare JSON data with the user's input
    const postData = {
      data: inputValue.split(''), // Split the input into an array of characters
    };

    // Make a POST request to your API endpoint
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    };

    try {
      const response = await fetch('https://bajaj-finserv-production.up.railway.app/bhfl', requestOptions);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>POST Operation</h2>
      <label>
        Data:
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={postData}>Send POST Request</button>
      <p>Status: {response.status}</p>
      <p>User ID: {response.user_id}</p>
      <p>College Email ID: {response.college_email_id}</p>
      <p>College Roll Number: {response.college_roll_number}</p>
      <p>Numbers Array: {response.numbers_array && response.numbers_array.join(', ')}</p>
      <p>Alphabets Array: {response.alphabets_array && response.alphabets_array.join(', ')}</p>
      <p>Highest Alphabet: {response.highest_alphabet}</p>
    </div>
  );
}

export default PostOperation;
