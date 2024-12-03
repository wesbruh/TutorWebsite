import React from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentBilling.css";
import axios from 'axios';

const StudentBillingPage = () => {
  const payroll = [
    { id: 1, payment:"", title: "Student Payment For November", date: "You have no payments for this month" },
  ];
  /*
  //code based on tutor payroll
  const [student, setStudent] = useState([])
    useEffect(() => {
    //routing needs fixing
    axios.get('http://localhost:8080/api/v1/studentRoute/getStudentData')
    .then(students => setStudents(students.data))
    .catch(err => console.log(err))
  }, [])

  return (
  <div className = "payroll-page">
          <Sidebar />
            {student.length === 0 ? (
              <h1>Student Fees</h1>
              <p>View Your Billing Information.</p>
              <p>No payment due.</p>
            ) : (
              tutors.map((tutor) => (
                <li key={student._id} className="student-billing">
                  <div>
                    <p className="student-id">{student.id}</p>
                    <p className="student-payment">{student.payment}</p>
                    <p className="student-name">{student.title}</p>
                    <p className="student-email">{student.date}</p>
                  </div>
                </li>
              ))
            )}
          </div>
   );
};
export default StudentBillingPage;
  */
  return (
    <div className="payroll-page">
      <Sidebar />
      <main className="main-content">
        <h1>Student Fees</h1>
        <p>View Your Billing Information.</p>
        <ul className="payroll-list">
          {payroll.map((payroll) => (
            <li key={payroll.id} className="payroll-item">
              <div className="payroll-icon"></div>
              <div>
                <p className="payroll-title">{payroll.title}</p>
                <p className="payroll-date">{payroll.date}</p>
                <p className="payroll-amount"> Total Amount: {/*$*/}{payroll.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StudentBillingPage;

//

//
//
//
///
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//