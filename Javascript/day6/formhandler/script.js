const handleTextChange=(e)=>{
    console.log(e);
    console.log(
        "change:",
        e.target.name,
    );
};

const handleKeyDown=(e)=>{
    console.log(e);
    console.log(
        "Key down:",
        e.target.name,
    );
}
    
const handleKeyUp=(e)=>{
    console.log(e);
    console.log(
        "Key up:",
        e.target.name,
    );
};