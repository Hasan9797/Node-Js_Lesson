const uuid = require('uuid');
const path = require('path');
const fs = require('fs');

// Enternet shop
class Books {
	constructor(title, author, price, description) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.description = description;
		this.id = uuid.v4()
	}

	toJSON() {
		return {
			title: this.title, // Algebra
			author: this.author, // Ali
			price: this.price, // 200
			description: this.description,//5 sinflar uchun kitob
			id: this.id
		};
	}

// data bazaga malumotni saqlash
	async save() {
		const books = await this.getAll();
		// console.log(books);
		books.push(this.toJSON());

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data.json'),
				JSON.stringify(books),
				err => {
					if (err) {
						reject(err);
					} else {
						resolve(console.log('Data saved successfully'));
					}
				}
			);
		});
	}

	// datadagi bor bo'lgan hamma malumotlari olish
	getAll() {
		return new Promise((resolve, reject) => {
			fs.readFile(
				path.join(__dirname, '..', 'data.json'),
				'utf-8',
				(err, data) => {
					if (err) {
						reject(err);
					} else {
						resolve(JSON.parse(data));
					}
				}
			);
		});
	}

	async getById(id) {
		const books = await this.getAll();
		return books.find((data) => data.id === id)
	}

	async delete(id) {
		const books = await this.getAll();
		const newbook = []
		books.forEach(data => {

			// harbitta kitob 
			if(data.id !== id) { // kelgan kitobni id si kelayotgan id ga teng bolmasa if sharti bajariladi
				newbook.push(data) // newbook ga qo'shib qo'yyabti
			}
		});

		return new Promise((resolve, reject) => {
			fs.writeFile(
				path.join(__dirname, '..', 'data.json'),
				JSON.stringify(newbook),
				err => {
					if (err) {
						reject(err);
					} else {
						resolve(console.log('Deleted successfully'));
					}
				}
			);
		});
		
	}

	async update(id, data) {
	
	}
}

// BoyOta
// const bok = new Books();

module.exports = Books;
