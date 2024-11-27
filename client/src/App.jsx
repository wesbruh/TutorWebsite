import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./Dashboard/indexStudentDashboard";
import { Home } from "./HomePage/indexHomePage";
import { StudentLoginPage } from "./Login/indexStudentLogin";
import { TutorLoginPage } from "./Login/indexTutorLogin";
import { StudentSignUp } from "./Sign-Up/indexStudentSign-Up";
import { TutorSignUp } from "./Sign-Up/indexTutorSign-Up";
import StudentBillingPage from "./Payroll/indexStudentBilling";
import StudentAppointments from "./Appointments/indexStudentAppointments";
import PrivateRoute from "./components/routes/Private";
import StudentReviewPage from "./FeedbackSystem/indexStudentReview";
import NotificationsPage from "./Notifications/indexNotifications";
import ForgotPasswordPage from "./ForgotPassword/indexforgotPassword";
import TutorPayrollPage from "./Payroll/indexTutorPayroll";
import GoogleSuccess from "./components/routes/GoolgeSuccess";

// Not ready for testing yet, need to add imports
import { StudentSettings } from "./ProfileManagement/indexStudentSettings";
/*import { TutorProfilePage } from './ProfileManagement/indexTutorProfilePage';
import { TutorSettingsPage } from './ProfileManagement/indexTutorSettings';*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studentLogIn" element={<StudentLoginPage />} />
      <Route path="/Notifications" element={<NotificationsPage />} />
      <Route path="/tutorlogin" element={<TutorLoginPage />} />
      <Route path="/studentsignup" element={<StudentSignUp />} />
      <Route path="/tutorsignup" element={<TutorSignUp />} />
      <Route path="/Notifications" element={<NotificationsPage />} />
      <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
      <Route path="/google-success" element={<GoogleSuccess />} />
      <Route path="/studentdashboard" element={<PrivateRoute />}>
        <Route path="" element={<StudentDashboard />} />
      </Route>
      <Route path="/AccountSettings" element={<StudentSettings />} />
      <Route path="/studentbilling" element={<StudentBillingPage />} />
      <Route path="/Appointments" element={<StudentAppointments />} />
      <Route path="/Reviews" element={<StudentReviewPage />} />
      <Route path="/tutorPayroll" element={<TutorPayrollPage />} />
    </Routes>
  );
}

export default App;
