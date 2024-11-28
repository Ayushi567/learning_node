const fs = require("fs"); // fs- file system, it is build-in in node js
const os = require("os");

console.log(os.cpus().length);

// // syncronous
// fs.writeFileSync('./test.txt', "hello world"); // create a file and the content inside it



// //Async
// fs.writeFile("./test.txt", "hello", (err) => {}); // same as above


// blocking (Sync)
// console.log(1)
// const result = fs.readFileSync('./contact.txt',  "utf-8");
// console.log(result);

// console.log(2)

// in blocking operation (sync) will return 1 result 2 
// while non blocking operation (async) will return 1 2 result




// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err){
//         console.log("Error", err);

//     }else{
//         console.log(result);
//     }
// })

// // sychronous will return while asynchronous will return a callback

// fs.appendFileSync('./contact.txt', "7654");
// // use to add more things into the file





