import {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentReview.css";
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

function StudentReviewPage () {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/userRoute');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);
    return (
        <div className="StudentReviewPage">
            <Sidebar />
            <table classname="table">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return <tr>
                                <td> {user.name}</td>
                                <td> {user.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default StudentReviewPage;
