import { useState } from "react";

const About = ({ heading, name, learning }) => {
  const [details, showDetails] = useState(false);
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => showDetails(!details)}>{details ? "See less" : "Know More"}</button>
      {details && <p>{learning}</p>}
    </div>
  );
};

export default About
