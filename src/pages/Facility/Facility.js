import React from 'react'
import FacilityLogIn from './FacilityLogIn';
import FacilitySignUp from './FacilitySignUp'
import { Route, Routes } from 'react-router-dom';

function Facility() {
  return (
    <div className="App">
      {/* <Router> */}
      
      
        
        <Routes>
          <Route path='/Login' element={<FacilityLogIn />} />
          <Route path='/Signup' element={<FacilitySignUp />} />
          <Route path='/FacilityDashboard' element={<Facility />} />
        </Routes>

      {/* </Router> */}

      
     
    </div>
  );
}

export default Facility;