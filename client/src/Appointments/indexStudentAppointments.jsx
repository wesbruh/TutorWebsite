import React, { useEffect, useState } from 'react';
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./StudentAppointments.css";
import axios from 'axios';

const ScheduleAppointment =() => {
    const [subjects, setSubjects] = useState([]);
    const [tutors, setTutors] = useState([]);
    const [times, setTimes] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [selectedTutor, setSelectedTutor] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [subjectsLoaded, setSubjectsLoaded] = useState(false);    //Tracks subjects loading
    const [currentTime, setCurrentTime] = useState(new Date());     //Current date and time

    
    const auth = JSON.parse(localStorage.getItem("auth"));
    const id = auth?.user?._id;
    const token = auth?.token;
    const name = auth?.user?.firstName;
    

    //Fetch subjects for dropdown
   useEffect(() => {
        if (!subjectsLoaded){
            axios
            .get('http://localhost:8080/api/v1/subjects')
            .then(response => {
                setSubjects(response.data);
                setSubjectsLoaded(true); //Avoid fetching again
            }) 
            .catch(err => console.error('Error fetching subjects.', err));
        }
    }, [subjectsLoaded]);
    
    //Fetch tutors for selected subject
    useEffect(() => {
        setTutors([]); //deafult tutors if no subject is selected
        setSelectedTutor(''); //default tutor selection if subject is changed
        setSelectedTime(''); //default time selection if subject is changed
        if (selectedSubject) {
            axios
                .get(`http://localhost:8080/api/v1/tutorRoute/getsubject/${selectedSubject}`)
                .then(response => {
                    setTutors(response.data);
                    setSelectedTutor(''); //Reset tutor if subject is changed
                    setSelectedTime(''); //Reset time if subject is changed
                })
                .catch(err => console.error('Error fetching tutors.', err));    // Throw error message
        }
    }, [selectedSubject]);

    //fetch available time for the selected tutor
    useEffect(() => {
        if (selectedTutor) {
            axios
                .get(`http://localhost:8080/api/v1/tutorRoute/availableTimes/${selectedTutor}`)
                .then(response => {
                    setTimes(response.data); // Array of available Date objects
                })
                .catch(err => console.error('Error fetching times.', err));     // Throw error message
        }else{
            setTimes([]); //Reset times if no tutor is selected
        }
    }, [selectedTutor]);

    //appointment submit
    const handleSubmit = () => {
        if (selectedTutor && selectedTime){
            axios
                .post('http://localhost:8080/api/v1/appointmentRoutes/bookAppointment', { 
                    tutorId: selectedTutor, 
                    userId: id,
                    firstName: name,
                    subject: selectedSubject,
                    date: selectedTime,
                })
                .then(() => alert('Appointment successfully booked!'))
                .catch(err => alert('Error booking appointment.', err));    // Throw error message to screen
        }
    };

    return (
        <div className="appointments-page">
            <Sidebar />
            <div className="appointments-content">
                <h1 className="appointment-header">Schedule an Appointment</h1>
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
            <div className="dropdown-container">

                {/**Subject Dropdown*/}
                <label>
                    Subject: 
                    <select  
                        onChange={e => setSelectedSubject(e.target.value)} 
                        value={selectedSubject}>
                      
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                           <option key={subject._id} value={subject._id}>
                            {subject.subjectName}
                            </option>
                        ))}
                 </select>
                </label>

                {/**Tutor Dropdown*/}
                <label>
                  Tutor:
                 <select  
                    onChange={e => setSelectedTutor(e.target.value)} 
                    value={selectedTutor} 
                    disabled={!selectedSubject}>     {/*Disable if no subject is selected*/}
                     
                     <option value="">Select a tutor</option>
                     {tutors.map(tutor => (
                         <option key={tutor._id} value={tutor._id}>
                            {tutor.name}            {/*The name is returned base on the hardcoded subjectId in the database*/}
                        </option>
                     ))}
                 </select>
                </label>

                {/**Time Dropdown*/}
             <label>
                 Time:
                 <select  
                    onChange={e => setSelectedTime(e.target.value)} 
                    value={selectedTime} 
                    disabled={!selectedTutor}> {/*Disable if no tutor is selected*/}

                       <option value="">Select a time</option>
                      {times.map(time => (
                        <option key={time} value={time}>
                            {new Date(time).toLocaleString()}
                        </option>
                      ))}
                 </select>
             </label>

             <button onClick={handleSubmit} disabled={!selectedTime}>
                Book Appointment
             </button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleAppointment;