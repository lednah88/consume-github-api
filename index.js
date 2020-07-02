const fetch = require("./node_modules/node-fetch");

function getRepo(repoName, startDate, endDate) {
  let startingDate = new Date(startDate);
  let endingDate = new Date(endDate);
  fetch(`https://api.github.com/repos/github-tools/${repoName}/pulls`)
    .then((response) => response.json())
    .then((data) => {
      let j = 0;
      for (datas in data) {
        if (
          new Date(data[j].created_at) >= startingDate &&
          new Date(data[j].created_at) <= endingDate &&
          new Date(data[j].updated_at) >= startingDate &&
          new Date(data[j].updated_at) <= endingDate
        ) {
          console.log(`pull request created at ${data[j].created_at}`);
          console.log(`pull request updated at ${data[j].updated_at}`);
          console.log(`pull request merged at ${data[j].merged_at}`);
          console.log(`pull request closed at ${data[j].closed_at}`);
        }
        j++;
      }
    })
    .catch((error) => console.error(error));
}
getRepo("github", "2019-10-01", "2020-02-29");
