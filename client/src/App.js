import { Route, Routes } from "react-router-dom";
import { StudentDashboard } from "./Dashboard/indexStudentDashboard";
import { Home } from './HomePage/indexHomePage';
import { StudentLoginPage } from './Login/indexStudentLogin';
import { TutorLoginPage } from "./Login/indexTutorLogin";
import { StudentSignUp } from './Sign-Up/indexStudentSign-Up';
import { TutorSignUp } from './Sign-Up/indexTutorSign-Up';


// Not ready for testing yet, need to add imports
/*import { StudentSettings } from './ProfileManagement/indexStudentSettings';
import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return(
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/studentLogIn" element={<StudentLoginPage/>} />
        <Route path="/tutorlogin" element = {<TutorLoginPage/>} />
        <Route path="/studentsignup" element={<StudentSignUp />} /> 
        <Route path="/tutorsignup" element={<TutorSignUp />} /> 
        <Route path="/studentDashboard" element={<StudentDashboard />} />
      </Routes>

  );
}

export default App;
