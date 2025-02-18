const obj ={
    name: 'Doe',
    age: 30,
    city: 'New York',
};
const uname=obj.name;
console.log(uname);
//adding a key value pair
obj.country="India";
console.log(obj);
//accessing a value dynamically
const key=prompt("Enter the key");
console.log(obj[key]);
//deleting a key value pair
delete obj.city;
console.log(obj);
// update value
obj.age=50;
console.log(obj);
// check if a key exists
console.log("city" in obj);