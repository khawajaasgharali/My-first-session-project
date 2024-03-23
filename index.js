import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "EnterfirstNumber", type: "number", name: "firstNumber" },
    { message: "entersecondNumber", type: "number", name: "secondNumber" },
    { message: "select one of the operators to perform operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"], },]);
// if (answer.operator === "Additon"){console.log( answer.firstNumber + answer.secondNumber);}just for checking this line of code//
//                   NOW USING THE SECOND AND IMPORTANT PART  //    "CONDITIONAL STATEMENT"  //
//                                 WITH IF , ALSE IF AND ESLE CONDITONS                      //
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("PLEASE SELECT THE VALID OPERATOR");
}
