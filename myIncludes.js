Array.prototype.myIncludesMethod = function (target, fromIndex = 0) {
	for (let i = fromIndex; i < this.length; i++) {
		if (this[i] === target) {
			return true;
		}
	}
	return false;
};

let arr = [32, 42, 15, 28, 14, 22];
