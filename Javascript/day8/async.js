console.log("start");
const handleInnerCall=()=>{
    console.log("Step Y");
};
const handleCall=()=>{
    console.log("Step M");
    handleInnerCall();
    console.log("Step N");
};
handleCall();
document.querySelector("body").addEventListener("click", handleCall);
console.log("end");