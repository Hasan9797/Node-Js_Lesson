// const fs = require('fs');
// const path = require('path');

// folder created
// fs.mkdir(path.join(__dirname, 'papka'), err => {
// 	if (err) throw err.message;
//     console.log("ishladi");
// });


// fs.writeFile(
// 	path.join(__dirname, 'papka', 'node.txt'),
// 	"Karochi yig'ishtir karam shurvangni",
// 	err => {
//         if(err) throw err.message
//         console.log("yozuv yozildi");
//     }
// );


// file ga malumot qo'shadi
// fs.appendFile(
// 	path.join(__dirname, 'papka', 'node.txt'),
// 	" yonidan yozish update",
// 	err => {
// 		if (err) throw err.message;
// 		console.log('yozuv yozildi');
// 	}
// );


// file ichidagi malumotlarni o'qib beradi
// fs.readFile(
// 	path.join(__dirname, 'papka', 'node.txt'), "utf8",
// 	(err, data) => {
// 		if (err) throw err.message;
// 		console.log(data);
// 	}
// );


// fs.rmdir(path.join(__dirname, "./papka",), err => {
//     if (err) throw err.message
//     console.log("o'chdi");
// })


// fs.rmdir(path.join(__dirname, 'papka'), err => {
// 	if (err) throw err;
// 	console.log('Folder deleted...');
// });


// fs.rename(path.join(__dirname, "node"), path.join(__dirname,"newpapka"), err => {
// 	if (err) throw err;
// 	console.log("rename update successful");
// })