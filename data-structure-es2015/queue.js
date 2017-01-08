class Queue {
	constructor () {
		this.dataStore = [];
	}

	enqueue (element) {
		this.dataStore.push(element);
	}

	dequeue () {
		return this.dataStore.shift();
	}

	front () {
		return this.dataStore[0];
	}

	back () {
		return this.dataStore[this.dataStore.length - 1];
	}

	toString () {
		let retStr = '';
		this.dataStore.forEach((el) => {
			retStr += el + '\n';
		})
		return retStr;
	}

	isEmpty () {
		return this.dataStore.length == 0;
	}
}

module.exports = Queue;