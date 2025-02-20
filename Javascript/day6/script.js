const array=[
    {
        id:"1",
        name:"Anisha",
        email:"anisha@abes.ac.in",
        city:"Delhi"
    },
    {
        id:"2",
        name:"Rahul",
        email:"rahul@sharda.ac.in",
        city:"Bengalore"
    },
    {
        id:"3",
        name:"Asmit",
        email:"asmit@abes.ac.in",
        city:"Kanpur"
    },
    {
        id:"4",
        name:"Arpit",
        email:"arpit@abes.ac.in",
        city:"Jalon"
    },
];
function getRandomColor() {
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //   color += letters[Math.floor(Math.random() * 16)];
    // }
    // return color;
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }
  

const root=document.getElementById("parent");
array.forEach(element => {
    const newCard=document.createElement("div");
    newCard.addEventListener("click",()=>{
        newCard.style.backgroundColor=getRandomColor();
    });
    newCard.className="card";
    newCard.innerHTML=`<h3>${element.name}</h3>
    <h4>${element.email}</h4>
    <p class='text'>${element.city}</p>`;
    root.appendChild(newCard);    
});

const handleBgColor=()=>{
    const color=getRandomColor();
    document.getElementById("parent").style.backgroundColor=color;
}

const textEle=document.querySelector('.text');
textEle.addEventListener("click",()=>{
    textEle.style.backgroundColor=getRandomColor();
})