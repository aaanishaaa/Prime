// // FUNCTION DECLARATION
// function add1(a, b) {
//     console.log( a + b );
// }

// add1(10,20)

// function summod(a, b) {
//     console.log( (a + b) % 10 );
// }
// summod(11,30)

// // FUNCTION Assignment
// const ans=function add2(a, b) {
//     console.log( a + b );
// }
// ans(10,12)

// const ans4=function summod(a, b) {
//     console.log( (a + b) % 10 );
// }
// ans4(11,30)


// // Anonymous FUNCTION Assignment
// const ans2=function(a, b) {
//     console.log( a + b );
// }
// ans2(30,12)

// const ans5=function summod(a, b) {
//     console.log( (a + b) % 10 );
// }
// ans5(11,30)


// // Arrow FUNCTION
// const ans3=(a, b) => {
//     console.log( a + b );
// }
// ans3(40,12)

const modten = (a, b) => {
    const ans = (a + b) % 10;
    const printext = (ans) => {
        console.log(ans);
    }
    printext(ans);
}
modten(106, 20);
