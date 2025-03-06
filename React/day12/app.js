import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/card.js";
import { Button } from "./components/button.js";

const domRoot=document.getElementById("parent");
const reactRoot=createRoot(domRoot);
const App=()=>{
    return (
        <div >
            <Button color="green">Submit</Button>
            <Button color="red">Cancel</Button>
            <Card username="Raj" greeting="Good Evening"/>
            <Card username="Raju" greeting="Good Morning"/>
            <Card username="Rajan" greeting="Nice to meet you"/>
            <Card username="Arpit" greeting="Good Night"/>
            </div>
        );
    };
                          
reactRoot.render(<App/>);