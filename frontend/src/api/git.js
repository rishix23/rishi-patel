import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GIT_TOKEN,
});

export const getRepos = () => {
  return octokit.repos
    .listForAuthenticatedUser()
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

