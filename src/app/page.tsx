import React from 'react';
import Navbar from './components/index';
import PatientDetails from './components/PatientDetails';
import Doctor from './components/doctor';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <Doctor />
      <PatientDetails />
    </div>
  );
};

export default AboutMe;
