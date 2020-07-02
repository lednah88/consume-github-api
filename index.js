const fetch = require('./node_modules/node-fetch');

function getRepos(repoName, startDate, endDate) {
	var startingDate = new Date(startDate);
	var endingDate = new Date(endDate);
          fetch(`https://api.github.com/repos/github-tools/${repoName}/pulls`)
          .then((response) => response.json())
		  .then((data) => {
			  j = 0
			  for(datas in data){
				  if(new Date(data[j].created_at) >= startingDate  && new Date(data[j].created_at) <= endingDate && new Date(data[j].updated_at) >= startingDate  && new Date(data[j].updated_at) <= endingDate){
                      console.log(`pull reguest created at ${data[j].created_at}`);
                      console.log(`pull reguest updated at ${data[j].updated_at}`);
                      console.log(`pull reguest merged at ${data[j].merged_at}`);
                      console.log(`pull reguest closed at ${data[j].closed_at}`);
				  }
				  j++;
				}
			})
			.catch((error) => console.error(error));

 }
getRepos('github', '2019-10-01' , '2020-02-29');