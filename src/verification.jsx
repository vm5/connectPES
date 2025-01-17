import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');

  const handleVerification = () => {
    const validPrefixes = ["UG", "CS", "ECE", "AM", "EEE", "ME", "CV"];
    if (srns.startsWith("PES") && srns.length === 13 && validPrefixes.some(prefix => srns.includes(prefix))) {
      onVerify();
    } else {
      alert('Please provide a valid SRN');
    }
  };

  return (
    <VerificationContainer>
      <Title>The first step is student verification. This is simply to verify and confirm that you are a student of PES University.</Title>
      <Input
        type="text"
        placeholder="Enter your SRN (Case-sensitive)"
        value={srns}
        onChange={(e) => setSrns(e.target.value)}
      />
      <Button onClick={handleVerification}>Verify</Button>
    </VerificationContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #FF6F00, #003366); /* Gradient background from orange to blue */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ffffff; /* White text color for contrast */
  font-size: 24px;
  font-weight: bold;
  font-family:Coneria;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  font-family:Coneria;
  
  &:focus {
    border-color: #333;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family:Coneria;

  &:hover {
    background-color: #555;
  }
`;

export default Verification;
