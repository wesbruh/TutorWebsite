import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  const spinnerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(51, 51, 51)", // Optional: adds a light overlay
    zIndex: 1000, // Ensures the spinner is above other content
  };

  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => nav("/studentLogIn"), 5000);
  }, []);

  return (
    <div style={spinnerStyle}>
      <span color="black">Loading Authorization...</span>
      <ClipLoader size={50} color={"#123abc"} />
    </div>
  );
};

export default Spinner;
