import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import "./StudentAppointments.css";
import axios from 'axios';


const StudentAppointments = () => {
    const [tutors, setTutors] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/tutorRoute');
                setTutors(response.data);
            } catch (error) {
                console.error('Error fetching tutors:', error);
            }
        };

        fetchTutors();
    }, []);

    return (
        <div>
            <Sidebar />
            <h1 className="appointment-header">Book An Appointment</h1>
            <p className="current-time">Current Time: {currentTime.toLocaleString()}</p>

            {tutors.length > 0 ? (
                tutors.map((tutor, index) => (
                    <div key={index} className="tutor-card">
                        <h3>{tutor.name}</h3>
                        <p>Subject: {tutor.subject}</p>
                        <h4>Available Slots:</h4>
                        <ul>
                            {tutor.availability.map((slot, slotIndex) => (
                                <li key={slotIndex}>
                                    {slot.day}: {slot.startTime} - {slot.endTime}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p className="empty-state">No available tutors at this time.</p>
            )}
        </div>
    );
};

export default StudentAppointments;
