import React from "react";
import { Home } from "@emotion-icons/boxicons-solid/Home";
import { Calendar } from "@emotion-icons/boxicons-solid/Calendar";
import { Email } from "@emotion-icons/material/Email";
import { Payments } from "@emotion-icons/material/Payments";
import { Reviews } from "@emotion-icons/material-rounded/Reviews";
import { Settings } from "@emotion-icons/fluentui-system-filled/Settings";
import { LogOut } from "@emotion-icons/boxicons-regular/LogOut";


export const SidebarData = [

  {
    title: "Dashboard",
    icon: <Home />,
    link: "/StudentDashboard",
  },
  {
    title: "Appointments",
    icon: <Calendar />,
    link: "/StudentAppointments",
  },
  {
    title: "Notifications",
    icon: <Email />,
    link: "/StudentNotifications",
  },
  {
    title: "Billing",
    icon: <Payments />,
    link: "/StudentBilling",
  },
  {
    title: "Reviews",
    icon: <Reviews />,
    link: "/StudentReviews",
  },
  {
    title: "Account Settings",
    icon: <Settings />,
    link: "/StudentSettings",
  },
  {
    title: "Logout",
    icon: <LogOut />,
    link: "/",
  },
];
