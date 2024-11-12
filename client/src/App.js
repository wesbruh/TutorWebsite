import './App.css';
import { StudentLoginPage } from './Login/indexStudentLogin';
import { StudentSignUp } from './Sign-Up/indexStudentSign-Up';
import { TutorSignUp } from './Sign-Up/indexTutorSign-Up';
// Not ready for testing yet, need to add imports
/*import { StudentSettings } from './ProfileManagement/indexStudentSettings';
import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return(
    <div>
      <StudentLoginPage></StudentLoginPage>
    </div>
  );
}

export default App;
