//import styles from "./about.module.css";
import React from "react";
import Spotify from "../api/spotify";

const About = () => {
  const getAge = () => new Date().getFullYear() - 1998;

  return (
    <>
      <div className="mx-2">
        <div>
          <h3>About</h3>
          <p>
            {getAge()} year old DevSecOps Engineer. also a software developer with experience in full-stack development. i have worked on lots of projects for work and personal which integrated
            automation, cloud, scripting, and microservices (like the web page you are on right now ;) i have a passion for tech and always trying to sharpen my skills. have a click around...
          </p>

          <h2>Languages</h2>
          <ul>
            <li>DevOps Section:</li>
            <li>AWS</li>
            <li>Ansible</li>
            <li>Terraform</li>
            <li>Python</li>
            <li>Bash</li>
            <li>C#</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Organise list/layout + add more in different section</li>
          </ul>

          <h2>Hobbies</h2>
          <ul>
            <li>Gym</li>
            <li>Coding ;)</li>
            <li>Tennis</li>
            <li>Solving Leetcode, sadiomascist to list this as a hobby? LOL</li>
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
