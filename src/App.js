import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeLogIn from '../src/pages/Employee/EmployeeLogIn';
import EmployeeSignUp from '../src/pages/Employee/EmployeeSignUp'
import EmployeeDashboard from '../src/components/EmployeeDashboard';
import FacilityLogIn from '../src/pages/Facility/FacilityLogIn';
import FacilitySignUp from '../src/pages/Facility/FacilitySignUp'
import FacilityDashboard from './pages/FacillityDashboard/FacilityDashbord';
import PatientLogIn from '../src/pages/Patient/PatientLogIn';
import PatientSignUp from '../src/pages/Patient/PatientSignUp'
import PatientDashboard from './pages/PatientDashboard/PatientDashboard';
import Appointments from './pages/PatientDashboard/Appointments';
import Profile from './pages/PatientDashboard/Profile';
import ShareRecord from './pages/PatientDashboard/ShareRecord';
import Branch from './pages/FacillityDashboard/Branch';
import Employee from './pages/FacillityDashboard/Employee';
import Profiles from './pages/FacillityDashboard/Profiles';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
           
              <Route path='Employee' element={<EmployeeLogIn />} />
              <Route path='/Employee/Dashboard' element={<EmployeeDashboard />} />
              <Route path='/Employee/Signup' element={<EmployeeSignUp />} />
              <Route path='/Employee/LogIn' element={<EmployeeLogIn />} />
  
              <Route path='Facility' element={<FacilityLogIn />} />
              <Route path='/Facility/Dashboard' element={<FacilityDashboard />} />
              <Route path='/Facility/Login' element={<FacilityLogIn />} />
              <Route path='/Facility/Signup' element={<FacilitySignUp />} />
                  
              <Route path='Patient' element={<PatientLogIn />} />
              <Route path='/Patient/Dashboard' element={<PatientDashboard />} />
              <Route path='/Patient/Login' element={<PatientLogIn />} />
              <Route path='/Patient/Signup' element={<PatientSignUp />} />

              <Route path='/Facility/Dashboard/Branch' element={<Branch />} />
              <Route path='/Facility/Dashboard/Employee' element={<Employee />} />
              <Route path='/Facility/Dashboard/Profile' element={<Profiles />} />
        
              <Route path='/Patient/Dashboard/Appointments' element={<Appointments />} />
              <Route path='/Patient/Dashboard/Profile' element={<Profile />} />
              <Route path='/Patient/Dashboard/ShareRecord' element={<ShareRecord />} />

        </Routes>
      </Router>

      
     
    </div>
  );
}

export default App;
