const fs=require('fs')


// synchronous file write
// fs.writeFileSync("./text.txt", "hello node JS") 


//asynchronous file write

 //fs.writeFile("./text.txt", "hello NodeJS", (err)=>{});

//Synchronous file reading
// const result=fs.readFileSync("./read.txt", "utf-8")
// console.log(result);

//Asynchronous file reading

// fs.readFile("./read.txt","utf-8", (err,result)=>{
//     if(err)
//     {
//         console.log("Error",err)
//     }
//     else{
//         console.log(result);
//     }
// })


//Synchronous appending
fs.appendFileSync("./text.txt", "My Name is Geetanjali");

//asynchronous appending
fs.appendFile("./text.txt", "hello again",Uint8Array)

