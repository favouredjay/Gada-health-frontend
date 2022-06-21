import React from 'react'
import PatientLogIn from './PatientLogIn';
import PatientSignUp from './PatientSignUp'
import { Route, Routes } from 'react-router-dom';

function Patient() {
  return (
    <div className="App">
       
        <Routes>
          <Route path='/Login' element={<PatientLogIn />} />
          <Route path='/Signup' element={<PatientSignUp />} />
          <Route path='/PatiientDashboard' element={<Patient />} />
        </Routes>

      
     
    </div>
  );
}

export default Patient;