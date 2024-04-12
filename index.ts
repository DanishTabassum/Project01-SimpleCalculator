#! /usr/bin/env node
//project 01 - minicalculator
//this program will continue to ask till the user decides to exit the program
import inquirer from "inquirer"; //importing inquirer module
while(true){
    console.clear();
    console.log("BASIC CALCULATOR\n\n");
const answer = await inquirer.prompt([
   {message:"Enter first number", type:"number",name:"numOne"},
   {message:"Enter second number", type:"number",name:"numTwo"},
   {message:"Select your operation to perform",
    type:"list",
    name:"operator",
    choices: ["Add","Subtract","Multiply","Divide","Exit"],
   },
]);
if(answer.operator === "Add"){
    console.log(`${answer.numOne} + ${answer.numTwo} = `,answer.numOne+answer.numTwo)
    }
else if(answer.operator === "Subtract"){
    console.log(`${answer.numOne} - ${answer.numTwo} = `,answer.numOne-answer.numTwo)
}
else if(answer.operator === "Multiply"){
    console.log(`${answer.numOne} * ${answer.numTwo} = `,answer.numOne*answer.numTwo)
}
else if(answer.operator === "Divide"){
    console.log(`${answer.numOne} / ${answer.numTwo} = `,answer.numOne/answer.numTwo)
}
else if (answer.operator === "Exit"){
    console.log ('You have selected to exit the program');
    break;
}
//asking to continue program
const contProg = await inquirer.prompt([
    {message:"Do you wish to continue, type Y for YES or N for NO:", type:"confirm",name:"continue"},]);
    if (!contProg.continue){
        console.log("You have exited the program");
        console.log("Thankyou for using my mini-calcuator program");
        break;
    }
}
