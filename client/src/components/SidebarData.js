import React from 'react';
import {Home}  from '@emotion-icons/boxicons-solid/Home';
import {Calendar} from '@emotion-icons/boxicons-solid/Calendar';
import {BarChartAlt}  from '@emotion-icons/boxicons-regular/BarChartAlt';
import {Email} from '@emotion-icons/material/Email';
import {School}  from '@emotion-icons/ionicons-solid/School';
import {Payments}  from '@emotion-icons/material/Payments';
import {Reviews}  from '@emotion-icons/material-rounded/Reviews';
import {Settings}  from '@emotion-icons/fluentui-system-filled/Settings';
import {LogOut}  from '@emotion-icons/boxicons-regular/LogOut';

export const SidebarData =[ 
    {
        title:"Home",
        icon: <Home />,
        link: "/studentdashboard"
    },
    {
        title:"Appointments",
        icon: <Calendar />,
        link: "/Appointments"
    },
    {
        title:"Analytics",
        icon: <BarChartAlt />,
        link: "/Analytics"
    },
    {
        title:"Notifications",
        icon: <Email />,
        link: "/Notifications"
    },
    {
        title:"Tutors",
        icon: <School />,
        link: "/Tutors"
    },
    {
        title:"Billing",
        icon: <Payments />,
        link: "/studentbilling"
    },
    {
        title:"Reviews",
        icon: <Reviews />,
        link: "/Reviews"
    },
    {
        title:"Account Settings",
        icon: <Settings />,
        link: "/AccountSettings"
    },
    {
        title:"Logout",
        icon: <LogOut />,
        link: "/"
    },
]
