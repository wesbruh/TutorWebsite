import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { StudentLoginPage } from './Login/indexStudentLogin';
import { StudentSignUp } from './Sign-Up/indexStudentSign-Up';
import { TutorSignUp } from './Sign-Up/indexTutorSign-Up';
// Not ready for testing yet, need to add imports
/*import { StudentSettings } from './ProfileManagement/indexStudentSettings';
import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<StudentLoginPage />} />
        <Route path="/studentsignup" element={<StudentSignUp />} /> 
        <Route path="/tutorsignup" element={<TutorSignUp />} /> 
      </Routes>
    </Router>
  );
}

export default App;
