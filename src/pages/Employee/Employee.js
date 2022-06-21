import React from 'react'

// import EmployeeLogIn from './EmployeeLogIn';
// import EmployeeSignUp from './EmployeeSIgnUp';
import { Outlet, Link } from 'react-router-dom';
// import EmployeeDashboard from '../../components/EmployeeDashboard';

function Employee() {
  return (
    <div className="App">
     
      {/* <h1>Employee</h1> */}
      <Link to="/Employee/EmployeeDashboard"></Link>
      <Link to="/Employee/SignUp"></Link>
      <Link to="/Employee/LogIn"></Link>
        {/* <Routes> */}
          {/* <Route path='/Login' element={<EmployeeLogIn />} />
          <Route path='/Signup' element={<EmployeeSignUp />} />
          <Route path='/EmployeeDashboard' element={<EmployeeDashboard />} /> */}
          <Outlet />
        {/* </Routes> */}
    </div>
  );
}

export default Employee;