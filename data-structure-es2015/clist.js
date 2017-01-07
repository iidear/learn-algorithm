"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
	function List() {
		_classCallCheck(this, List);

		this.listSize = 0;
		this.pos = 0;
		this.dataStore = [];
	}

	_createClass(List, [{
		key: "clear",
		value: function clear() {
			this.dataStore.length = 0;
			this.listSize = this.pos = 0;
		}
	}, {
		key: "find",
		value: function find(element) {
			for (var i = 0, len = this.dataStore.length; i < len; i++) {
				if (this.dataStore[i] == element) {
					return i;
				}
			}
			return -1;
		}
	}, {
		key: "toString",
		value: function toString() {
			return this.dataStore;
		}
	}, {
		key: "insert",
		value: function insert(element, after) {
			var insertPos = this.find(after);
			if (insertPos > -1) {
				this.dataStore.splice(insertPos + 1, 0, element);
				++this.listSize;
				return true;
			}
			return false;
		}
	}, {
		key: "append",
		value: function append(element) {
			this.dataStore[this.listSize++] = element;
		}
	}, {
		key: "remove",
		value: function remove(element) {
			var foundAt = this.find(element);
			if (foundAt > -1) {
				this.dataStore.splice(foundAt, 1);
				--this.listSize;
				return true;
			}
			return false;
		}
	}, {
		key: "front",
		value: function front() {
			this.pos = 0;
		}
	}, {
		key: "end",
		value: function end() {
			this.pos = this.listSize - 1;
		}
	}, {
		key: "prev",
		value: function prev() {
			if (this.pos > 0) {
				--this.pos;
			}
		}
	}, {
		key: "next",
		value: function next() {
			if (this.pos < this.listSize - 1) {
				++this.pos;
			}
		}
	}, {
		key: "length",
		value: function length() {
			return this.listSize;
		}
	}, {
		key: "currPos",
		value: function currPos() {
			return this.pos;
		}
	}, {
		key: "moveTo",
		value: function moveTo(position) {
			this.pos = position;
		}
	}, {
		key: "getElement",
		value: function getElement() {
			return this.dataStore[this.pos];
		}
	}, {
		key: "contains",
		value: function contains(element) {
			for (var i = 0, len = this.dataStore.length; i < len; i++) {
				if (this.dataStore[i] == element) {
					return true;
				}
			}
			return false;
		}
	}]);

	return List;
}();

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
