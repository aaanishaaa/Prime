const arr=["fruits","banana","mango",24];
arr.push("apple");
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let i of arr){
    console.log(i);
}
for(let i in arr){
    console.log(i);
}