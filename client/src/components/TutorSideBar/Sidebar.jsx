import React from "react";
import "./Sidebar.css";
import {SidebarData} from "./SidebarData";
import {useAuth} from "../../context/auth";
import {ToastContainer, toast, Flip} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Sidebar() {
  const [auth, setAuth] = useAuth();

  // remove user data from localStorage
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    setTimeout(() => {
      window.location.pathname = "/";
    }, 1000);
  };
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                if (val.title === "Logout") {
                  // Call logout function if 'Logout' is clicked
                  handleLogout();
                } else {
                  window.location.pathname = val.link;
                }
              }}>
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>

      <ToastContainer hideProgressBar transition={Flip} />
    </div>
  );
}

export default Sidebar;
