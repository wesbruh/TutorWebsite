import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Home } from './HomePage/indexHomePage'
import { StudentLoginPage } from './Login/indexStudentLogin';
import { StudentSignUp } from './Sign-Up/indexStudentSign-Up';
import { TutorSignUp } from './Sign-Up/indexTutorSign-Up';
import { TutorLoginPage } from "./Login/indexTutorLogin";
// Not ready for testing yet, need to add imports
/*import { StudentSettings } from './ProfileManagement/indexStudentSettings';
import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/studentlogin" element={<StudentLoginPage/>} />
        <Route path="/tutorlogin" element = {<TutorLoginPage/>} />
        <Route path="/studentsignup" element={<StudentSignUp />} /> 
        <Route path="/tutorsignup" element={<TutorSignUp />} /> 
      </Routes>
    </Router>
  );
}

export default App;
