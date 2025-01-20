function fibonacci(n) {
    if (n <= 1) {
        return [0]; 
    }
    let sequence = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

console.log(fibonacci(4));

export default fibonacci;
