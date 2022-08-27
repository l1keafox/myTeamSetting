// AS A manager
// I WANT to generate a webpage that displays my team's basic info
// SO THAT I have quick access to their emails and GitHub profiles

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information

let inquire = require('inquirer');
let Manager = require('./lib/Manager');
let Intern = require('./lib/Intern');
let Engineer = require('./lib/Engineer');

let currentTeam;

function addToTeam(teamMember){
    if(!currentTeam) currentTeam = [];
    currentTeam.push(teamMember);
    console.log('Adding to team:',teamMember,'Current Count:',currentTeam.length);
}

let basicQuestions = [
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
        {
            type: "input",
            name: "personName",
            message: "What is your Name?",
            filter: (val) => val === "" ? "Raymond":val,
        },
        {
            type: "input",
            name: "employeeID",
            message: "What is your ID?",
            filter: (val) => val === "" ? "AbbCD":val,
        },
        {
            type: "input",
            name: "email",
            message: "What is your Email?",
            filter: (val) => val === "" ? "ray.ray.com":val,
        },
       
    ];
    

let managerQuestions = [
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    ... basicQuestions,
    {
        type: "input",
        name: "office",
        message: "What is your Office Number?",
        filter: (val) => val === "" ? "50000":val,
    },
    
];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
let thisManager;
inquire.prompt(managerQuestions).then((answers) => {
    addToTeam(new Manager(answers.personName,answers.employeeID,answers.email,answers.office))
    showMenu();
});

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
let menu = [
    {
        type: "list",
        name: "nextOption",
        message: "Please pick next option too add: Select Create HTML if done",
        choices: ["Engineer", "Intern", "Create HTML"],
    }    
];

function showMenu(){
    //
    inquire.prompt(menu).then((answers) => {
        console.log(answers);
        switch(answers.nextOption){
            case "Engineer":
                promptEngineer();
            break;

            case "Intern":
                promptIntern();
            break;

            case "Create HTML":
                createHTML();
            break;
        }
    });
}

// WHEN I select the engineer option
let engineerQuestions = [
    ... basicQuestions,
    {
        type: "input",
        name: "github",
        message: "What is your github account?",
        filter: (val) => val === "" ? "l1keafox":val,
    },

];

function promptEngineer(){
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
inquire.prompt(engineerQuestions).then((answers) => {
    addToTeam(new Engineer(answers.personName,answers.employeeID,answers.email,answers.github));
    showMenu();
});
}


// WHEN I select the intern option
let internQuestions = [
    ... basicQuestions,
    {
        type: "input",
        name: "school",
        message: "What is your school?",
        filter: (val) => val === "" ? "DU":val,
    },
];
function promptIntern(){
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
inquire.prompt(internQuestions).then((answers) => {
    addToTeam(new Intern(answers.personName,answers.employeeID,answers.email,answers.school));
    showMenu();
});

}

// WHEN I decide to finish building my team
function createHTML(){
// THEN I exit the application, and the HTML is generated

    console.log("EXIT APPLICATION");
  //  console.log("   Current Team: ",currentTeam);

    const HTMLHead = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Michroma&family=Permanent+Marker&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header class ="bg-dark text-light text-center m-2"> <h1> my Team </h1> </header>
        <div class = "container d-flex justify-content-center flex-wrap " id="teamContainer"> 
    `;
    const HTMLFoot = 
    `
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
          crossorigin="anonymous"
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>    
    </body>
    </html>    
    `;

    let HTML = '';
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

    HTML += HTMLHead;


    for(let member of currentTeam){
        let OTHERDATA = 'stomething';
        let special;
        let special2;
        let color;
        switch(member.constructor.name){
            case "Intern":
                special = 'School';
                special2 = member.getSchool();
                color = "danger";
            break;

            case "Manager":
                special = 'Office Number';
                special2 = member.getOfficeNumber();
                color = "primary";
            break;

            case "Engineer":
                special = `<a href="https://github.com/${member.getGithub()}/" target="_blank" >Github`;
                color = "info";
                special2 = member.getGithub()+'</a>';
            break;
        }
        const HTMLCard = 
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
`
                <div class="card border border-1 p-1 m-2 shadow p-3 mb-5 bg-body  rounded cardStyle" style="width: 18rem;">
                    <div class="card-body bg-${color}">
                        <h5 class="card-title">${member.getName()}</h5>
                        <h6 class="card-text">${member.getRole()}</h6>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${member.getId()}</li>
                        <li class="list-group-item"> <a href="mailto: ${member.getEmail()}"> Email:${member.getEmail()} </a> </li>
                        <li class="list-group-item">${special} #:${special2}</li>

                    </ul>
                </div>    
        `;
        HTML += HTMLCard;
        
    }


    HTML += HTMLFoot;

    const fs = require("fs");
    fs.writeFile("./dist/index.html", HTML, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });

    fs.writeFile("./dist/style.css", `
    *{
        font-family: 'Permanent Marker', cursive;
    }
    `, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });    
  }


