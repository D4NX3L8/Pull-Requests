function fibonacci(n) {
	const sequence = [];
	let previous = 0;
	let current = 1;

	for (let i = 0; i < n; i += 1) {
		sequence.push(previous);
		[previous, current] = [current, previous + current];
	}

	return sequence;
}

module.exports = fibonacci;
