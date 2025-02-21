const data=[
    {   id:"1we",
        name:"John",
        email:"john@email.com",
        age:26,
        city:"Delhi"
    },
    { 
        id:"2we",
        name:"Siva",
        email:"siva@email.com",
        age:27,
        city:"Mumbai"
    },
    {
        id:"3we",
        name:"Ravi",
        email:"ravi@email.com",
        age:28,
        city:"Noida"
    },
    {
        id:"4we",
        name:"hari",
        email:"hari@email.com",
        age:28,
        city:"Delhi"
    },
]

const root=document.getElementById('root')

const selectEle=document.getElementsByTagName("select")[0];

const showOptions=()=>{
    selectEle.innerHTML="";
    const citiesObj={}
    data.forEach((elem)=>(citiesObj[elem.city]=true));
    const cities=Object.keys(citiesObj);
    cities.forEach((city)=>{
        const newOption=document.createElement("option");
        newOption.value=city;
        newOption.innerText=city;
        selectEle.appendChild(newOption);
        
    });
};


const showcard=(newData)=>{
    showOptions();
    root.innerHTML=""
    newData.forEach((ele,idx)=>{
        const card=document.createElement('div');
        card.className="content";
        card.classList.add('card');
        card.innerHTML=`
        <h2 style="font-size: 1.5em; color: #333; padding:2px">${ele.name}</h2>
        <p style="font-size: 1.3em; color: #666; padding:2px">${ele.email}</p>
        <p style="font-size: 1.3em; color: #666; padding:2px">Age: ${ele.age}</p>
        <p style="font-size: 1.3em; color: #666; padding:2px">${ele.city}</p>
        <button style="padding: 1rem;margin:1rem; background-color: #f00; color: #fff; border: none; border-radius: 2px; cursor: pointer;" onClick="deletecard(event, '${idx}')">Delete</button>
        `
        root.appendChild(card)
    })
}

const deletecard=(e,idx)=>{
    // console.log(e.target.parentElement)

    //  e.target.parentElement.remove()
    //  data.forEach((ele,index)=>{
    //      if(ele.id===i){
    //          data.splice(index,1)
    //      }
    console.log(e,idx);
    data.splice(idx,1);
    showcard(data);  
};

const HandleSelect =(e)=>{
    const selectedCity=e.target.value
    const filteredData=data.filter((ele)=>
        {
            if(ele.city===selectedCity)
                return true
            else{
              return false
            } 
     })
     showcard(filteredData);
}

showcard(data);

const handleFormSubmit=(e)=>{
    e.preventDefault();
    // console.log(e);
    const isEmailExists=data.some((elem)=>{
        return elem.email===e.target.email.value;
    })
    if(isEmailExists){
        alert("Email already exists");
        return;
    }
    const newElem={
        name: e.target.name.value,
        email: e.target.email.value,
        city: e.target.city.value,
        age:e.target.age.value,
    };
    data.push(newElem);
    showcard(data);
};