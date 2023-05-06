import styles from './projects.module.css';
import { useEffect } from "react"
import { getRepos } from "../api/git"

const ProjectList = () => {
  const projects = [
    { name: 'Project A', date: 'January 2022', description: 'This project is about ...' },
    { name: 'Project B', date: 'February 2022', description: 'This project is about ...' },
    { name: 'Project C', date: 'March 2022', description: 'This project is about ...' },
  ];

  //const [projects, setProjects] = useState()

  useEffect(() => {
    getRepos().then((repos) => {
      console.log(repos);
      console.log("hi");
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  

  return (
    <div className={styles.projectsContainer}>
      <h2>Personal Coding Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className={styles.projectItem}>
            <h3>{project.name}</h3>
            <p>Date: {project.date}</p>
            <p>Description: {project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
