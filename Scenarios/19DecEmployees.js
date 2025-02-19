
// Scenario: Employee Work Hours
// You are tasked with analyzing employee work hours for a week. 
// You have an array that lists the number of hours worked by each employee in a week. Your job is to identify key statistics about the workforce.
// Problem Statement
// Given an array of work hours for employees:
// Find the employee(s) who worked the most hours.
// Find the employee(s) who worked the least hours.
// Calculate the average hours worked by all employees.
// Identify employees who worked more than the average hours.
// Hints:
// Use a loop or Math.max/Math.min to find the maximum and minimum values.
// Calculate the average by summing all hours and dividing by the array length.
// Use a filter or loop to find employees who worked above the average.

let workHours = [40, 35, 50, 20, 45, 50, 30];

// Find maximum using Math.max with spread operator
let maxHours = Math.max(...workHours);
let minhours = Math.min(...workHours);



console.log("the maxhours is ",maxHours)
console.log("the min hours is ",minhours)
let n
for(let i = 0;i<workHours.length; i++){
    


}
