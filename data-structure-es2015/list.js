class List {
	constructor () {
		this.listSize = 0;
		this.pos = 0;
		this.dataStore = [];
	}

	clear () {
		this.dataStore.length = 0;
		this.listSize = this.pos = 0;
	}

	find (element) {
		for (let i = 0,len = this.dataStore.length; i < len; i++) {
			if (this.dataStore[i] == element) {
				return i;
			}
		}
		return -1;
	}

	toString () {
		return this.dataStore;
	}

	insert (element, after) {
		let insertPos = this.find(after);
		if (insertPos > -1) {
			this.dataStore.splice(insertPos + 1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	}

	append (element) {
		this.dataStore[this.listSize++] = element;
	}

	remove (element) {
		let foundAt = this.find(element);
		if (foundAt > -1) {
			this.dataStore.splice(foundAt, 1);
			--this.listSize;
			return true
		}
		return false;
	}

	front () {
		this.pos = 0;
	}

	end () {
		this.pos = this.listSize - 1;
	}

	prev () {
		if (this.pos > 0) {
			--this.pos;
		}
	}

	next () {
		if (this.pos < this.listSize - 1) {
			++this.pos;
		}
	}

	length () {
		return this.listSize;
	}

	currPos () {
		return this.pos;
	}

	moveTo (position) {
		this.pos = position;
	}

	getElement () {
		return this.dataStore[this.pos];
	}

	contains (element) {
		for (let i = 0, len = this.dataStore.length; i < len; i++) {
			if (this.dataStore[i] == element) {
				return true;
			}
		}
		return false;
	}
}

module.exports = List;

// let names = new List();
// names.append('Xiao Ming');
// names.append('XX');
// names.append('iidear');
// names.append('Zhang San');
// console.log(names.toString());
// names.remove('XX');
// names.insert('Li Si', 'iidear');
// console.log(names.toString());

// for(names.front(); names.currPos() < names.length(); names.next()) {
// 	console.log(names.getElement());
// }