import React, { useEffect, useState } from 'react';
import Sidebar from "../components/TutorSideBar/Sidebar";
import "./tutorAppointments.css"
import axios from 'axios';

const TutorAppointmentsPage = () => {
    // const [subjects, setSubjects] = useState([]);
    // const [tutors, setTutors] = useState([]);
    // const [times, setTimes] = useState([]);
    // const [selectedSubject, setSelectedSubject] = useState('');
    // const [selectedTutor, setSelectedTutor] = useState('');
    // const [selectedTime, setSelectedTime] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());

    // CAUSES ERROR will fix later on
    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/v1/subjectsRoute').then(response => setSubjects(response.data));
    // }, []);

    // useEffect(() => {
    //     if (selectedSubject) {
    //         axios.get(`http://localhost:8080/api/v1/tutorRoute/${selectedSubject}`).then(response => setTutors(response.data));
    //     }
    // }, [selectedSubject]);

    // useEffect(() => {
    //     if (selectedTutor) {
    //         axios.get(`http://localhost:8080/api/v1/tutorRoute:times/${selectedTutor}`).then(response => setTimes(response.data));
    //     }
    // }, [selectedTutor]);

    // const handleSubmit = () => {
    //     axios.post('http://localhost:8080/api/v1/appointmentRoutes/appointments', { tutorId: selectedTutor, time: selectedTime })
    //         .then(() => alert('Appointment booked!'))
    //         .catch(err => console.error(err));
    // };

    

    return (
        <div className="appointments-page">
            <Sidebar />
            <div className="appointments-content">
                <h1 className="appointment-header">View Your Upcoming Appointments</h1>
                <p className="current-time">
                Current Time: {`${currentTime.toLocaleDateString([], {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}, ${currentTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })}`}
                </p>
            {/* <div className="dropdown-container">
                <label>
                    Subject: 
                    <select  onChange={e => setSelectedSubject(e.target.value)} value={selectedSubject}>
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                           <option key={subject._id} value={subject._id}>{subject.name}</option>
                        ))}
                 </select>
                </label>
                <label>
                  Tutor:
                 <select  onChange={e => setSelectedTutor(e.target.value)} value={selectedTutor} disabled={!selectedSubject}>
                      <option value="">Select a tutor</option>
                     {tutors.map(tutor => (
                         <option key={tutor._id} value={tutor._id}>{tutor.name}</option>
                     ))}
                 </select>
                </label>
             <label>
                 Time:
                 <select  onChange={e => setSelectedTime(e.target.value)} value={selectedTime} disabled={!selectedTutor}>
                       <option value="">Select a time</option>
                      {times.map(time => (
                        <option key={time} value={time}>{new Date(time).toLocaleString()}</option>
                      ))}
                 </select>
             </label>
             <button onClick={handleSubmit} disabled={!selectedTime}>Book Appointment</button>
                </div> */}
            </div>
        </div>
    );
};

export default TutorAppointmentsPage;