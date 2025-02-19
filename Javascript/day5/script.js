// console.dir(window); // document is an object BOM
// console.dir(document); // document is an object DOM
//seacrching for elements

//1. document.getElementById()
//2. document.getElementsByClassName()
//3. document.getElementsByTagName()
//4. document.querySelector()
//5. document.querySelectorAll()
// const elem=document.getElementById('text-1');
// console.log(elem);
// const elem=document.getElementsByClassName('text-1');
// console.log(elem);
// document.children[0].children[1].children[0].style.color='red';
// document.children[0].children[1].children[1].style.backgroundColor='blue';
// document.children[0].children[1].children[1].style.padding='20px';
// document.children[0].children[1].children[1].children[0].style.color='yellow';
// document.children[0].children[1].children[1].children[1].style.color='yellow';
// document.children[0].children[1].children[1].children[2].style.color='yellow';
// document.children[0].children[1].children[1].children[3].style.color='yellow';
const outerdiv=document.querySelector("div");
outerdiv.style.backgroundColor='blue';
outerdiv.style.padding='10px';
outerdiv.style.color='blue';
for(let i=0;i<outerdiv.children.length;i++){
    outerdiv.children[i].style.backgroundColor='yellow';
}

const mapping={
    Invitation:"You are invited for the event",
    Birthday:"Happy Birthday",
    Notice:"Notice for the event",
    Meeting:"Meeting is scheduled",
};

Array.from(outerdiv.children).forEach((child) => {
    if (child.children[0] && child.children[1]) {
        const key = child.children[0].innerHTML;
        console.log(key);
        child.children[1].innerHTML = mapping[key];
    }
});