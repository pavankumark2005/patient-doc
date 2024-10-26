"use client"; // Mark this file as a client component

import { useEffect, useState } from 'react';

const PatientDetails = ({ id }) => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPatientDetails = async () => {
        try {
          const response = await fetch(`/api/patients/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPatient(data);
        } catch (error) {
          console.error('Error fetching patient details:', error);
        }
      };
      fetchPatientDetails();
    }
  }, [id]);

  if (!patient) return <div>Loading...</div>; // Loading state

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '50vh', 
      width: '50vw', 
      backgroundColor: '#f0f4f8', 
      padding: '20px', 
      margin: 'auto', // Center horizontally
      borderRadius: '10px', // Rounded corners
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect
    }}>
      <h1 style={{ textDecoration: 'underline', color: '#333' }}>{patient.Name}</h1>
      <p><strong>Age:</strong> {patient.Age}</p>
      <p><strong>Gender:</strong> {patient.Gender}</p>
      <p><strong>Medical Condition:</strong> {patient.MedicalCondition}</p>
      <h2 style={{ marginTop: '20px' }}>About Me</h2>
      <p style={{ textAlign: 'center' }}>
        I am a patient with a history of {patient.MedicalCondition}. I have been under treatment for the past few years and am looking forward to improved health outcomes.
      </p>
    </div>
  );
};

export default PatientDetails;
