import React from "react";
import { createRoot } from "react-dom/client";

const domRoot=document.getElementById("parent");
const reactRoot=createRoot(domRoot);

const Card=({username,greeting})=>{
    return (
        <div>
            <h3>Hello {username}!</h3>
            <p>{greeting}</p>
        </div>
    );
};

const App=()=>{
    return (
        <div>
            <Card username="Raj" greeting="Good Evening"/>
            <Card username="Raju" greeting="Good Morning"/>
            <Card username="Rajan" greeting="Nice to meet you"/>
            <Card username="Arpit" greeting="Good Night"/>
        </div>
    );
};

reactRoot.render(<App/>);