import styles from "./about.module.css";
import React from "react";
import Spotify from "../api/spotify";

const About = () => {
  const getAge = () => {
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    const birthYear = 1998;
    return currentYear - birthYear;
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutSection}>
          <h3>About</h3>
          <p>
            {getAge()} year old DevSecOps Developer. also a software developer with experience in full-stack development. i have worked on lots of
            projects for work and personal which integrated automation, cloud, scripting, and microservices (like the web page you are on right now ;)
            i have a passion for tech and always trying to sharpen my skills. have a click around...
          </p>

          <h2>Languages</h2>
          <ul className={styles.languagesSection}>
            <li>C#</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Terraform</li>
            <li>Organise list/layout + add more in different section</li>
          </ul>

          <h2>Hobbies</h2>
          <ul className={styles.hobbiesSection}>
            <li>Gym</li>
            <li>Coding ;)</li>
            <li>Tennis</li>
          </ul>
        </div>
        <h1>Music</h1>
        <Spotify />
        <h2> Movies</h2>
        <p>api integration coming soon...</p>

        <h2>Resume</h2>
        <p>this will be coming soon in a creative way...</p>
      </div>
    </>
  );
};

export default About;
