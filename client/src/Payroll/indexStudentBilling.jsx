// imports still need to be supported
import React from "react";
import Sidebar from "../components/Sidebar";
import "./styleStudentBilling.css";
/*import { CalendarIcon } from "./CalendarIcon";
import { GraduationCap } from "./GraduationCap";
import { StarWrapper } from "./StarWrapper";
import { Statistic1 } from "./Statistic1";
import { User } from "./User";
import backButton from "./back-button.png";
import billingIconFrame from "./billing-icon-frame.svg";
import dashboardIconFrame from "./dashboard-icon-frame.svg";
import emailIconFrame from "./email-icon-frame.svg";
import frame from "./frame.svg";
import image2 from "./image-2.png";
import image from "./image.svg";
import logo from "./logo.png";
import rectangle2 from "./rectangle-2.svg";
import settingsIconFrame from "./settings-icon-frame.svg";*/
// import "./styleStudentBilling.css";
// import vector from "./vector.svg";

export const StudentBillingPage = () => {
    const studentBilling = [
        { id: 1, subject: "Math", date: "15 October, 2024 11:00 AM" },
        { id: 2, subject: "US History", date: "13 October, 2024 02:00 PM" },
        { id: 3, subject: "Biology", date: "11 October, 2024 02:30 PM" },
        { id: 4, subject: "Math", date: "8 October, 2024 02:00 PM" },
        { id: 5, subject: "English", date: "5 October, 2024 02:00 PM" },
    ]

    return (
        <div className="Student-Billing-Page">
          <Sidebar />
          <main className="main-content">
            <h1>Student Billing</h1>
            <p>View billing history.</p>
            <ul className="student-billing-list">
              {studentBilling.map((billing) => (
                <li key={billing.id} className="billing-item">
                  <div className="billing-icon"></div>
                  <div>
                    <p className="billing-title">{billing.subject}</p>
                    <p className="billing-date">{billing.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
};
