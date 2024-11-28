/*IMPORT ROUTES*/
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/routes/Private";
import GoogleSuccess from "./components/routes/GoolgeSuccess";

/*HOMEPAGE, SIGNUP, LOGIN, FORGOTPASS*/
import { Home } from "./HomePage/indexHomePage";
import { StudentLoginPage } from "./Login/indexStudentLogin";
import { TutorLoginPage } from "./Login/indexTutorLogin";
import { StudentSignUp } from "./Sign-Up/indexStudentSign-Up";
import { TutorSignUp } from "./Sign-Up/indexTutorSign-Up";

/*IMPORT STUDENT PAGES*/
import StudentDashboard from "./Dashboard/indexStudentDashboard";
import StudentAppointments from "./Appointments/indexStudentAppointments";
import StudentNotificationsPage from "./Notifications/indexNotifications";
import StudentBillingPage from "./Payroll/indexStudentBilling";
import StudentReviewPage from "./FeedbackSystem/indexStudentReview";
import { StudentSettings } from "./ProfileManagement/indexStudentSettings";
import ForgotPasswordPage from "./ForgotPassword/indexforgotPassword";

/*IMPORT TUTOR PAGES*/
import TutorDashboard from "./Dashboard/indexTutorDashboard";
import TutorPayrollPage from "./Payroll/indexTutorPayroll";



// Not ready for testing yet, need to add imports

/*import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/StudentLogIn" element={<StudentLoginPage />} />
      <Route path="/StudentSignup" element={<StudentSignUp />} />
      <Route path="/TutorLogin" element={<TutorLoginPage />} />
      <Route path="/TutorSignup" element={<TutorSignUp />} />
      <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/google-success" element={<GoogleSuccess />} />
      <Route path="/StudentDashboard" element={<PrivateRoute />}>
        <Route path="" element={<StudentDashboard />} />
      </Route>
      <Route path="/StudentAppointments" element={<StudentAppointments />} />
      <Route path="/StudentNotifications" element={<StudentNotificationsPage />} />
      <Route path="/StudentBilling" element={<StudentBillingPage />} />
      <Route path="/StudentReviews" element={<StudentReviewPage />} />
      <Route path="/StudentSettings" element={<StudentSettings />} />

      <Route path="/TutorDashboard" element={<PrivateRoute />}>
        <Route path="" element={<TutorDashboard />} />
      </Route>

      <Route path="/TutorPayroll" element={<TutorPayrollPage />} />
    </Routes>
  );
}

export default App;
