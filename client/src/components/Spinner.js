import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

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
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: adds a light overlay
    zIndex: 1000, // Ensures the spinner is above other content
  };

  return (
    <div style={spinnerStyle}>
      <span>Loading...</span>
      <ClipLoader size={50} color={"#123abc"} />
    </div>
  );
};

export default Spinner;
