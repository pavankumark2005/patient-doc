"use client"; 

import { useRouter } from 'next/router';
import PatientDetails from '../../components/PatientDetails'; 

const PatientDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {id ? <PatientDetails id={id} /> : <div>Loading...</div>} 
    </div>
  );
};

export default PatientDetailsPage;
