import styles from "./projects.module.css";
import { useEffect, useState } from "react";
import { getRepos } from "../api/git";

const ProjectList = () => {
  const [repos, setRepos] = useState([]);

  // gets repositories from GitHub
  useEffect(() => {
    getRepos()
      .then((repos) => {
        setRepos(repos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <h2>Personal Coding Projects</h2>
      <ul>
        {repos.map((repo, index) => (
          <li
            key={index}
            className={styles.projectItem}>
            <h3>{repo.name}</h3>
            <p>Date: {repo.created_at}</p>
            <p>Description: {repo.description}</p>
            <p>URL: {repo.html_url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
