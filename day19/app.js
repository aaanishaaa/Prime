const http=require("http");
const fsPromises=require("fs/promises");
const { saveObjInFile } = require("./fileHelper");
const PORT=2022
const server = http.createServer((req,res)=>{
    const{url,method}=req;
    console.log("URL : ", url);
    const[path,queryStr] =url.split('?');
    if(path==='/products' && method==='POST'){
        // console.log("queryStr:", queryStr);
        const queryItems=queryStr.split('&');
        const items=queryItems.map((str) => str.split('='));
        const obj=Object.fromEntries(items);
        saveObjInFile(obj);
        res.end(
            JSON.stringify({
                status: "success",
                message:"Product added",
            })
        );
    }
});

server.listen(PORT,()=>{
    console.log("server is running on port "+ PORT);
});