#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 90000);
let myBalance = 0;
let student = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Enter your name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return ("Try again! and enter full name");
        },
    },
    {
        name: "course",
        type: "list",
        message: "Select your course",
        choices: ["Web Development", "Digital Marketing", "Graphics Designing"]
    },
]);
let tutionFee = {
    "Web Development": 6000,
    "Digital Marketing": 5000,
    "Graphics Designing": 5000
};
console.log(`\n Tution Fees: ${tutionFee[student.course]}/-\n`);
console.log(`You have successfully enrolled in ${student.course} course\n`);
let selection = await inquirer.prompt({
    name: "ans",
    type: "list",
    message: "What you want to do next",
    choices: ["View Status", "Exit"]
});
if (selection.ans == "View Status") {
    console.log("\n       STATUS       \n");
    console.log(`Student Name: ${student.name}`);
    console.log(`Student id: ${randomNumber}`);
    console.log(`Enrolled Course: ${student.course}`);
    console.log(`Balance: ${myBalance += tutionFee[student.course]}`);
}
else {
    console.log("\n Exiting Student Management System");
}
;
