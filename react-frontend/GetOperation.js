import React, { useState, useEffect } from 'react';

function GetOperation() {
  const [operationCode, setOperationCode] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/bhfl')
      .then(response => response.json())
      .then(data => setOperationCode(data.operation_code))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>GET Operation</h2>
      <p>Operation Code: {operationCode}</p>
    </div>
  );
}

export default GetOperation;
