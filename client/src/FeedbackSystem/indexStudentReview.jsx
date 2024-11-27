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

  }, []);

  console.log(users);
  const [firstName, setTutorName] = useState("");
  const [lastName, setReview] = useState("");
  const UpdateInfo = async (e) => { };
  return (
      <div className = "reviews-page">
        <Sidebar />
        <main className = "main-content">
          <h1>Tutor Reviews</h1>
          <p>Leave a review of your past appointments!</p>
          <div>
          <form onSubmit={UpdateInfo}>
                <div className="input-fields">
                    <div className = "input-item">
                        <div>
                        <p className="title">Tutor Name</p>
                        <input 
                        className="input" 
                        value={firstName}
                        onChange={(e) => setTutorName(e.target.value)}
                        />
                        </div>
                    </div>
                    <div className = "input-item">
                        <div>
                        <p className="title">How was your experience?</p>
                        <input 
                        className="input" 
                        value={lastName}
                        onChange={(e) => setReview(e.target.value)}
                        />
                        </div>
                    </div>
                    
                    <button className="input" type="submit">Submit</button>
                </div>
                </form>
          </div>
        </main>
      </div>
  );
}

export default StudentReviewPage;
