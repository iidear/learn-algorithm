const Stack = require('../stack');

/**
 * 数制转换
 * 十进制转为0~9进制
 */
{
	let mulBase = function (num, base) {
		let s = new Stack();
		do {
			s.push(num % base);
			num = Math.floor(num / base);
		} while (num > 0);

		let converted = '';
		while (!s.isEmpty()) {
			converted += s.pop();
		}

		return converted;
	}

	console.log('47(10) = ' + mulBase(47, 2) + '(2) = ' + mulBase(47, 8) + '(8)');
}

console.log('\n' + '#'.repeat(20) + '\n');

/**
 * 回文
 */
 {
 	let isPalindrome = function (word) {
 		let s = new Stack();
 		for (let i = 0,len = word.length; i < len; ++i) {
 			s.push(word[i]);
 		}

 		let rword = '';
 		while (!s.isEmpty()) {
 			rword += s.pop();
 		}

 		return word == rword;
 	}

 	const s1 = 'hello world',
 		  s2 = 'racecar';
 	console.log(s1 + ' is ' + (isPalindrome(s1) ? '' : 'not') + ' palindrame');
 	console.log(s2 + ' is ' + (isPalindrome(s2) ? '' : 'not') + ' palindrame');
 }

 console.log('\n' + '#'.repeat(20) + '\n');

 /**
 * 中缀表达式转后缀表达式及计算
 */
 {
 	let translate = function (expr_mid) {
 		let s = new Stack();
 		let expr_af = '';
 		for (let i = 0,len = expr_mid.length; i < len; ++i) {
 			if (expr_mid[i] < '0' || expr_mid[i] > '9') {
 				expr_af += ' ';
 			}
 			switch (expr_mid[i]) {
 				case '+':
 				case '-':
 					while (!s.isEmpty() && s.peek() != '(') {
 						expr_af += s.pop();
 						expr_af += ' ';
 					}
 					s.push(expr_mid[i]);
 					break;
 				case '*':
 				case '/':
 				case '(':
 					s.push(expr_mid[i]);
 					break;
 				case ')':
 					do {
 						expr_af += s.pop();
 						expr_af += ' ';
 					} while (s.peek() != '(')
 					s.pop();
 					break;
 				default:
 					expr_af += expr_mid[i];
 			}
 		}

 		while (!s.isEmpty()) {
 			expr_af += ' ';
 			expr_af += s.pop();
 		}

 		return expr_af;
 	}

 	let cal = function (expr_af) {
 		let s = new Stack();
 		let arr = expr_af
 					.split(' ')
 					.filter(x => x != '')
 					.map((str) => {
			 			str = str.trim();
			 			if (str == '+' || str == '-' || str == '*' || str == '/') {
			 				return str;
			 			}
			 			return Number(str);
			 		})

 		arr.forEach((x) => {
			switch (x) {
				case '+':
					s.push(s.pop() + s.pop());
					break;
				case '-':
					let subtrahend = s.pop(),
						minuend = s.pop();
					s.push(minuend - subtrahend);
					break;
				case '*':
					s.push(s.pop() * s.pop());
					break;
				case '/':
					let divisor = s.pop(),
						dividend = s.pop();
					s.push(dividend / divisor);
					break;
				default:
					s.push(x);
			}
 		})

 		return s.pop();
 	}

 	const mid1 = '9+(3-1)*3+10/2';
 	let after1 = translate(mid1);
 	console.log(after1);
 	console.log(mid1 + ' = ' +cal(after1));

  	const mid2 = '7+6*5-3/2+1';
 	let after2 = translate(mid2);
 	console.log(after2);
 	console.log(mid2 + ' = ' +cal(after2));
 }