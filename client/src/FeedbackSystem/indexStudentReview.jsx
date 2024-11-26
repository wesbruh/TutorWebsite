import {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentReview.css";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css';

function StudentReviewPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/tutorRoute/getname",
          {tutorId: "673995695e8c05da10acd356"}
        );
        setUsers(
          Array.isArray(response.data) ? response.data : [response.data]
        ); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div className="StudentReviewPage">
      <Sidebar />
      <table className="table">
        {" "}
        {/* Corrected className */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th> {/* Adjusted to display tutor's subject */}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {" "}
              {/* Added a unique key */}
              <td>{user.name}</td>
              <td>{user.subject || "N/A"}</td>{" "}
              {/* Added fallback for missing subject */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentReviewPage;
