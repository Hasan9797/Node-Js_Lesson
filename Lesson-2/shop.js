const Books = require('./model/shop');
const uuid = require('uuid');

const bock = {
	title: 'Tarix',
	author: 'Davlat',
	price: 300,
	description: 'Maktab kitoblari bir tenga qimmat',
};
let { title, author, price, description } = bock;

const xojiakbar = new Books(title, author, price, description);
// let proms = ulugbek.delete('3e2e4dfc-3660-42f5-adef-0d02f64dc31a');
// console.log(proms.then(data => console.log(data)));
// console.log(proms.then(data => console.log(data)));

// xojiakbar.update('fd03c351-960d-4dc3-9cd3-d1092eb07ef0', {
// 	title: 'English',
// 	author: 'Hokim',
// });

// const user = {
// 	title: 'Algebra',
// 	author: 'Davlat',
// 	price: 200,
// 	description: 'Maktab kitoblari bir tenga qimmat',
// };
// let { title, author, price, description } = user;

// const xojiakbar = new Books(title, author, price, description);
// xojiakbar.save();

// let id = uuid.v4();
// console.log(id);

// 9d65b421-868f-429e-9839-d4372f2921fd
// b599264a-59b3-497c-b4fb-a7f97d339eb4