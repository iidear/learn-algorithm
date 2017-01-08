const Queue = require('../queue');

{
	let q = new Queue();
	q.enqueue('Xiao Ming');
	q.enqueue('xx');
	q.enqueue('iidear');
	console.log(q.toString());
	q.dequeue();
	console.log(q.toString());
}

/**
 * 基数排序
 */
{
	// 获取数字的第 个(1)/十(10)/百(100) ... 位
	let getNumAt = (num, at) => {
		num = Math.floor(num / at);
		num = num % 10;
		return num;
	}

	let distribute = (nums, queues, digit) => {
		nums.forEach( (num) => {
			queues[getNumAt(num, digit)].enqueue(num);
		})
	}

	let collect = (queues, nums) => {
		console.log('sorting: ' + nums);
		nums.length = 0;
		queues.forEach( (queue) => {
			while (!queue.isEmpty()) {
				nums.push(queue.dequeue());
			}
		})
	}

	// 生成待排序数字
	let N = 3; // 待排序数字最大为N位
	let nums = [];
	for (let i = 0; i < 10; ++i) {
		nums[i] = Math.floor(Math.random() * Number('1' + '0'.repeat(N)));
	}
	console.log('before sort: ' + nums);

	// 生成盒子
	let queues = [];
	for (let i = 0; i < 10; ++i) {
		queues[i] = new Queue();
	}

	// N位数，排N次
	for (let i = 0; i < N; ++i) {
		const base = Number('1' + '0'.repeat(i));
		distribute(nums, queues, base);
		collect(queues, nums);
	}
	console.log('after sort: ' + nums)
}

console.log('*'.repeat(40) + '\n');

/**
 * 双向队列
 * 允许从队列两端添加和删除元素
 */
 class Deque {
 	constructor () {
 		this.dataStore = [];
 	}

 	endeque (element, fromHead) {
 		if (fromHead == true) {
 			this.dataStore.unshift(element);
 			return
 		}
 		this.dataStore.push(element);
 	}

 	dedeque (fromEnd) {
 		if (fromEnd == true) {
 			return this.dataStore.pop();
 		}
 		return this.dataStore.shift()
 	}

 	isEmpty () {
 		return this.dataStore.length == 0;
 	}
 }

 {
 	// 利用双向队列判断回文
 	let isPalindrome = (str) => {
 		let deq = new Deque();
 		for (let i = 0, len = str.length; i < len; ++i) {
 			deq.endeque(str[i]);
 		}
		let left = '', right = '';
 		while (  (left = deq.dedeque())
 				&& (right = deq.dedeque(true)) ) {
 			if (left != right) {
 				return false
 			}
 		}
 		return true;
 	}
  	const s1 = 'hello world',
 		  s2 = 'racecar';
 	console.log(s1 + ' is ' + (isPalindrome(s1) ? '' : 'not') + ' palindrame');
 	console.log(s2 + ' is ' + (isPalindrome(s2) ? '' : 'not') + ' palindrame');
 }

console.log('*'.repeat(40) + '\n');

/**
 * 候诊室活动
 */
class WaitingRoom extends Queue {
	constructor () {
		super();
		// this.dataStore = [];
	}

	dequeue () {
		let priority = 0;
		for (let i = 1, len = this.dataStore.length; i < len; ++i) {
			if (this.dataStore[i].code > this.dataStore[priority].code) {
				priority = i;
			}
		}
		return this.dataStore.splice(priority, 1);
	}

	displayWaitingList () {
		console.log('Waiting List:');
		this.dataStore.forEach( (patient) => {
			console.log(`${patient.name} : ${patient.code}`);
		})
	}
}

class Patient {
	constructor (name, code) {
		this.name = name;
		this.code = code || Math.floor(Math.random() * 10);
	}

	// 进入候诊室
	enterWaitingRoom (ed) {
		ed.enqueue(this);
	}

	// 查看等待就诊患者名单
	seeWaitingList (ed) {
		ed.displayWaitingList();
	}
}

let ed = new WaitingRoom();

let dd = new Patient('dd', 7);
dd.enterWaitingRoom(ed);
let xx = new Patient('xx', 3);
xx.enterWaitingRoom(ed);
let iidear = new Patient('iidear');
iidear.enterWaitingRoom(ed);
let yy = new Patient('yy',7);
yy.enterWaitingRoom(ed);
let zz = new Patient('zz');
zz.enterWaitingRoom(ed);

ed.displayWaitingList();
let seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
iidear.seeWaitingList(ed);