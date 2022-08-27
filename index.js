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
        filter: (val) => val === "" ? "Dr4yr4yU":val,
    },

];

function promptEngineer(){
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
inquire.prompt(engineerQuestions).then((answers) => {
    console.log(answers);
    addToTeam(new Engineer( ));
    showMenu();
});
}


// WHEN I select the intern option
let internQuestions = [
    ... basicQuestions,
    {
        type: "input",
        name: "github",
        message: "What is your school?",
        filter: (val) => val === "" ? "DU":val,
    },
];
function promptIntern(){
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
inquire.prompt(internQuestions).then((answers) => {
    console.log(answers);
//    addToTeam();    
    showMenu();
});

}

// WHEN I decide to finish building my team
function createHTML(){
    console.log("EXIT APPLICATION");
// THEN I exit the application, and the HTML is generated
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
}

