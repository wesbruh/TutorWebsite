// import React, { useEffect, useState } from 'react';
// import Sidebar from "../components/Sidebar";
// import "./StudentAppointments.css";
// import axios from 'axios';

// const StudentAppointments = () => {
//     const [tutors, setTutors] = useState([]);
//     const [currentTime, setCurrentTime] = useState(new Date());

//     useEffect(() => {
//         const fetchTutors = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/v1/tutorRoute');
//                 setTutors(response.data);
//             } catch (error) {
//                 console.error('Error fetching tutors:', error);
//             }
//         };

//         fetchTutors();

//         // Update current time every minute
//         const interval = setInterval(() => {
//             setCurrentTime(new Date());
//         }, 60000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://assets.calendly.com/assets/external/widget.js';
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             document.body.removeChild(script); // Cleanup script on unmount
//         };
//     }, []);

//     return (
//         <div className="appointments-page">
//             <Sidebar />
//             <div className="appointments-content">
//                 <h1 className="appointment-header">Book An Appointment</h1>
//                 <p className="current-time">
//                     Current Time: {currentTime.toLocaleString([], { hour: '2-digit', minute: '2-digit' })}
//                 </p>

//                 {/* Calendly Widget
//                 <div
//                     className="calendly-inline-widget"
//                     data-url="https://calendly.com/codykneale"
//                     style={{ minWidth: "320px", height: "700px", margin: "0 auto" }}
//                 ></div> */}

//                 {/* {tutors.length > 0 ? (
//                     tutors.map((tutor, index) => (
//                         <div key={index} className="tutor-card">
//                             <h3>{tutor.name}</h3>
//                             <p>Subject: {tutor.subject}</p>
//                             <h4>Available Slots:</h4>
//                             <ul>
//                                 {tutor.availability.map((slot, slotIndex) => (
//                                     <li key={slotIndex}>
//                                         {slot.day}: {slot.startTime} - {slot.endTime}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )) */}
//                 ) : (
//                     <p className="empty-state">No available tutors at this time.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StudentAppointments;

import React, { useEffect, useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentAppointments.css";
import axios from 'axios';

const ScheduleAppointment = () => {
    const [subjects, setSubjects] = useState([]);
    const [tutors, setTutors] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTutor, setSelectedTutor] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        axios.get('/api/v1/subjectsRoute').then(response => setSubjects(response.data));
    }, []);

    useEffect(() => {
        if (selectedSubject) {
            axios.get(`/api/v1/tutorRoute/${selectedSubject}`).then(response => setTutors(response.data));
        }
    }, [selectedSubject]);

    useEffect(() => {
        if (selectedTutor) {
            axios.get(`/api/v1/times/${selectedTutor}`).then(response => setTimes(response.data));
        }
    }, [selectedTutor]);

    const handleSubmit = () => {
        axios.post('/api/v1/appointments', { tutorId: selectedTutor, time: selectedTime })
            .then(() => alert('Appointment booked!'))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <Sidebar />
            <h2>Schedule an Appointment</h2>
            <label>
                Subject:
                <select onChange={e => setSelectedSubject(e.target.value)} value={selectedSubject}>
                    <option value="">Select a subject</option>
                    {subjects.map(subject => (
                        <option key={subject._id} value={subject._id}>{subject.name}</option>
                    ))}
                </select>
            </label>
            <label>
                Tutor:
                <select onChange={e => setSelectedTutor(e.target.value)} value={selectedTutor} disabled={!selectedSubject}>
                    <option value="">Select a tutor</option>
                    {tutors.map(tutor => (
                        <option key={tutor._id} value={tutor._id}>{tutor.name}</option>
                    ))}
                </select>
            </label>
            <label>
                Time:
                <select onChange={e => setSelectedTime(e.target.value)} value={selectedTime} disabled={!selectedTutor}>
                    <option value="">Select a time</option>
                    {times.map(time => (
                        <option key={time} value={time}>{new Date(time).toLocaleString()}</option>
                    ))}
                </select>
            </label>
            <button onClick={handleSubmit} disabled={!selectedTime}>Book Appointment</button>
        </div>
    );
};

export default ScheduleAppointment;