const fs = require('fs');
const List = require('../clist')


let MovieList = new List();

fs.readFile('films.txt', 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);

	let movies = data.split('\n');
	for (let i = 0,len = movies.length; i < len; ++i) {
		MovieList.append(movies[i].trim())
	}
	console.log(MovieList.toString())
})