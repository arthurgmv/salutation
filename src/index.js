//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let currentTimeDate = new Date();
var hours = currentTimeDate.getHours();
var AMPM = hours >= 12 ? "PM" : "AM";

let salutation = "Good Morning";
let color = "red";

if (hours >= 12 && hours < 18) {
  salutation = "Good Afternoon";
  color = "green";
} else if (hours >= 18 || hours < 6) {
  salutation = "Good Evening";
  color = "blue";
} else {
  salutation = "Good Morning";
  color = "red";
}

const styles = {
  color: color,
  fontSize: "24px",
  fontWeight: "bold"
};

ReactDOM.render(
  <h1 style={styles}>{salutation}</h1>,
  document.getElementById("root")
);
