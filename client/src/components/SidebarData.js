import React from 'react';
import {Home}  from '@emotion-icons/boxicons-solid/Home';
import {Calendar} from '@emotion-icons/boxicons-solid/Calendar';
import {Email} from '@emotion-icons/material/Email';
import {Payments}  from '@emotion-icons/material/Payments';
import {Reviews}  from '@emotion-icons/material-rounded/Reviews';
import {Settings}  from '@emotion-icons/fluentui-system-filled/Settings';
import {LogOut}  from '@emotion-icons/boxicons-regular/LogOut';

export const SidebarData =[ 
    {
        title: "Home",
        icon: <Home />,
        link: "/studentdashboard"
    },
    {
        title: "Appointments",
        icon: <Calendar />,
        link: "/Appointments"
    },
    {
        title: "Notifications",
        icon: <Email />,
        link: "/Notifications"
    },
    {
        title: "Billing",
        icon: <Payments />,
        link: "/studentbilling"
    },
    {
        title: "Reviews",
        icon: <Reviews />,
        link: "/studentreviewpage"
    },
    {
        title: "Account Settings",
        icon: <Settings />,
        link: "/AccountSettings"
    },
    {
        title: "Logout",
        icon: <LogOut />,
        link: "/"
    },
]
