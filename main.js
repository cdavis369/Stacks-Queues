const Queue = require('./queue');
const Stack = require('./stack');

const q = new Queue();

for (let i = 1; i < 11; i++) {
    q.enqueue(i);
}

console.log(q.peek());

const s = new Stack();

for (let i = 1; i < 10; i++) {
    s.push(i);
}

s.printQueue();
console.log(s.pop());