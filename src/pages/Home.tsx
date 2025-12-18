import React from "react";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="hero hero-layout">
      <div className="hero-text">
        <h1>Jonas Antunes</h1>
        <h2>Computer Engineering Student | Backend-Oriented Software Developer</h2>
        <p>
          Computer Engineering student at ISEP with a strong interest in backend
          development and Java-based systems. Experienced with TypeScript and React
          through real-world frontend projects, always focused on writing clean,
          maintainable, and well-structured code.
        </p>
      </div>

      <img
        src={profileImage}
        alt="Jonas Antunes"
        className="profile-image"
      />
    </div>
  );
};

export default Home;
