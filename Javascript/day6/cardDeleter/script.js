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
        name:"Ishanvi",
        email:"ishanvi@abes.ac.in",
        city:"Kanpur"
    },
    {
        id:"4",
        name:"Mohit",
        email:"mohit@abes.ac.in",
        city:"Mumbai"
    },
];
const root=document.getElementById("parent");
if (root) {
    array.forEach(element => {
        const newCard=document.createElement("div");
        newCard.className="card";
        newCard.innerHTML=`<h3>${element.name}</h3>
        <h4>${element.email}</h4>
        <p class='text'>${element.city}</p>`;
        root.appendChild(newCard);    
    });
}
const deleteButtons = document.querySelectorAll('.card');
deleteButtons.forEach((card, index) => {
    const deleteButton = document.createElement('button');
    deleteButton.className="deleteCard";
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        array.splice(index, 1);
        card.remove();
    });
    card.appendChild(deleteButton);
});

const changeT = document.querySelectorAll('.card');
changeT.forEach((card, index) => {
    const changeTitleButton = document.createElement('button');
    changeTitleButton.innerText = 'Change Title';
    changeTitleButton.className="changeT";
    changeTitleButton.addEventListener('click', () => {
        const newTitle = prompt('Enter new title:');
        if (newTitle) {
            card.querySelector('h3').innerText = newTitle;
        }
    });
    card.appendChild(changeTitleButton);
});