class Stack {
	constructor () {
		this.dataStore = [];
		this.top = -1;
	}

	push (element) {
		this.dataStore[++this.top] = element;
	}

	pop () {
		if (this.top == -1) throw new Error('Stack is Null');
		return this.dataStore[this.top--];
	}

	peek () {
		return this.dataStore[this.top]
	}

	isEmpty () {
		return this.top == -1
	}

	clear () {
		this.dataStore.length = 0;
		this.top = -1;
	}
}

module.exports = Stack;

// let s = new Stack();
// s.push('Xiao Ming');
// s.push('xx');
// s.push('iidear');
// while (!s.isEmpty()) {
// 	console.log(s.pop());
// }
// s.pop();