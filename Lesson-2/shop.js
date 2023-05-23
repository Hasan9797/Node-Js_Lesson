const Books = require('./model/shop');

const bock = {
	title: 'Tarix',
    title: 'Tarix',
	author: 'Davlat',
	price: 150,
	description: 'Maktab kitoblari bir tenga qimmat',
};
let { title, author, price, description } = bock;

const ulugbek = new Books(title, author, price, description);
ulugbek.save();

// const user = {
// 	title: 'Algebra',
// 	author: 'Davlat',
// 	price: 200,
// 	description: 'Maktab kitoblari bir tenga qimmat',
// };
// let { title, author, price, description } = user;

// const xojiakbar = new Books(title, author, price, description);
// xojiakbar.save();