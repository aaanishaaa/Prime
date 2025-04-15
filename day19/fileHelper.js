const fsPromises = require("fs/promises");

const saveObjInFile = async (obj) => {
    const oldData = await fsPromises.readFile('./data.json', 'utf-8');
    const oldDataArr = JSON.parse(oldData || "[]");
    const idx=oldDataArr.findIndex(({name,price})=>{
        if(name===obj.name && price===obj.price) return true;
    });
    if(idx==-1){
        oldDataArr.push(obj);
    }
    else{
        oldDataArr[idx].stock=Number(oldData[idx].stock)+Number(obj.stock);
    }
    // oldDataArr.push(obj);
    await fsPromises.writeFile('./data.json', JSON.stringify(oldDataArr));
};

module.exports = {
    saveObjInFile,
};
