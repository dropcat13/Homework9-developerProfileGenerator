const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const html = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);

// promptUser().then(res => console.log(res))
promptUser().then(res => getInfo(res))

function promptUser() {
  return inquirer.prompt([
     {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "list",
      name: "color",
      message: "What is your favorite color?",
      choices: ['green', 'blue', 'pink', 'red'],
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
    {
      type: "input",
      name: "email",
      message: "What is your email?"
    }
  ]);
}

function getInfo({username}) {
        // const repoqueryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        const queryUrl = `https://api.github.com/users/${username}`;
        
        axios.get(queryUrl).then(function(userinfo) {
console.log(userinfo);

            
            // // const repoNamesStr = public_repos.join("\n");
            
            // // fs.writeFile("repos.txt", repoNamesStr, userinfo, function(err) {
            // fs.writeFile("repos.txt", userinfo, function(err) {
            //     if (err) {
            //         throw err;
            //     }
                
            //     console.log(`Saved ${public_repos.length} repos`);
            // });
        });       
};  
    
// User location via Google Maps - find out more about this and sort out.

function generateHTML(data){
 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
   <title>Document</title>
 </head>
 <body>  
 <div class="jumbotron jumbotron-fluid">
 <div class="container">
   <h1 class="display-4">Hi! My name is ${answers.name}</h1>
   <p class="lead">I am from ${answers.location}.</p>
 </div>
</div>
   <h3><span class="badge badge-secondary">Contact Me</span></h3>
   <li class="list-group-item">My GitHub username is ${answers.github}</li>
   <img src='${userinfo.avatar_url}'>
   <!-- location via google maps ${userinfo.location}-->
   <ul class="list-group">
   <li class="list-group-item">My blog: ${userinfo.blog}</li>
   <li class="list-group-item">My bio: ${userinfo.bio}</li>
   <li class="list-group-item">I have ${userinfo.public_repos} public repos</li>
   <li class="list-group-item">I have ${userinfo.followers} followers</li>
   <li class="list-group-item">I have * Number of GitHub stars - work this out too </li>
   <li class="list-group-item">I follow ${userinfo.following} other users</li>-->
   </ul>
 </body>
 </html>`;
};

//  npm i electron@5.0.3 electron-html-to@2.6.0 - to convert to a pdf.