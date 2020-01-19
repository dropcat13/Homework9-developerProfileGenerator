const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
     {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you from?"
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub Username"
    },
  ]);
}

function getInfo(){
    .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        
        axios.get(queryUrl).then(function(res) {
            const repoNo = res.data.map(function(repo) {
                return repo.name;
            });
            const profileImage = res.data.map(function(repo) {
                return repo.avatar_url;
            });
            const userName = res.data.map(function(repo) {
                return repo.name;
            });
            const profile = 
            const userBio = 
            const followers = 
            const stars = 
            const following = 
            const blog =

            
            const repoNamesStr = repoNames.join("\n");
            
            fs.writeFile("repos.txt", repoNamesStr, function(err) {
                if (err) {
                    throw err;
                }
                
                console.log(`Saved ${repoNames.length} repos`);
            });
        });       
    }); 
}  
    
// User location via Google Maps

function generateHTML(data)
