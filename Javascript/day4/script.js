// const sum=(a,b,c)=>{
//     const ans=a+b;
//     c(ans)
// }
// const printpretty=(txt)=>{
//     console.log("-------------");
//     console.log(txt);
//     console.log("-------------");
// }
// sum(20,30,printpretty);


const metaData = () => {
    const name = prompt("Please enter your name");
    console.log("Hello", name);
    const numofsub = parseInt(prompt("Please enter the number of subjects"));
    return numofsub;
}
// const str1="Hello";
// const str2="World";
// // const ans=str1+" "+str2;
// const ans=`${str1} ${str2}`
// console.log(ans);

const getSubjects = (num) => {
    const record = {};
    for (let i = 0; i < num; i++) {
        const subName = prompt(`Please enter the name of subject ${i + 1}`);
        const marks = parseInt(prompt(`Please enter the marks for ${subName}`));
        record[subName] = marks;
    }
    return record;
}

const getPercentage = (obj) => {
    const marks = Object.values(obj);
    let totalp = 0;
    // for (let i = 0; i < marks.length; i++) {
    //     totalp += parseInt(marks[i]);
    // }
    marks.forEach(ele => {
        totalp += parseInt(ele);
    });
    return (totalp / marks.length);
}

const getHighestScoringSub=(obj)=>{
    let highest=0;
    let maxsubn="";
    const allMarks=Object.entries(obj);
    allMarks.forEach(ele=>{
        const subName=ele[0];
        const subMarks=ele[1];
        if(parseInt(subMarks) > highest){
            maxsubn=subName;
            highest=subMarks;
        }
    });

    // const allMarks=Object.values(obj);
    // for(let i=0;i<allMarks.length;i++){
    //     if(highest>allMarks[i]){
    //         highest=allMarks[i];
    //     }

    // }
    
    return [highest,maxsubn];
}

const getGrades = (percentage) => {
    const grades=[
        [90,"A+"],
        [80,"A"],
        [70,"B+"],
        [60,"B"],
    ];
    let grade="F";
    grades.forEach((arr)=>{
        if(arr[0]<=percentage){
            grade=arr[1];
        }
    });
    return grade;
};

const num = metaData();
const record = getSubjects(num);
console.log(record);

const percentage = getPercentage(record);
console.log("Total Percentage:", percentage);
const high=getHighestScoringSub(record);
console.log("Highest Marks: ",high[0]);
console.log("Highest Subject Name: ",high[1]);
const grade = getGrades(percentage);
console.log("Grade:", grade);