const name = prompt("Enter your name");
const n = prompt("Enter your total number of subjects");
const obj = {};
for (let i = 0; i < n; i++) {
    const subject = prompt("Enter the subject");
    const score = parseFloat(prompt("Enter the score"));
    obj[subject] = score;
}

let totalScore = 0;
for (let subject in obj) {
    totalScore += obj[subject];
}
arr=Object.values(obj);
arr.sort();
console.log("Highest Score:", arr[arr.length-1]);
const tp=totalScore/n;

console.log("Total Percentage:", tp);
if(tp >= 90){
    console.log("A+");
}
else if(tp>=80 && tp<90){
    console.log("A");
}
else if(tp>=70 && tp<80){
    console.log("B");
}
else{
    console.log("F");
}