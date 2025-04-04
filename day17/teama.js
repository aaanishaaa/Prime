console.log("team A loading");
const add = require("./teamb.js");
const p=100;
const ex=20;
const rev=add(p+ex);

module.exports ={
    p,ex,rev
};
confirm.log("team A loaded");