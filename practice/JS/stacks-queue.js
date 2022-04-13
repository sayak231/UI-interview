// program to implement stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  // add element to the stack
  push(element) {
    return this.items.push(element);
  }

  // remove element from the stack
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }
}

let stck = new Stack();
stck.push(1);
stck.push(2);
stck.push(4);
stck.push(8);
console.log(stck.items);

stck.pop();
console.log(stck.items);

console.log(stck.peek());

console.log(stck.isEmpty());

console.log(stck.size());

stck.clear();
console.log(stck.items);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// // Javascript program to evaluate value of a postfix expression

// // Method to evaluate value of a postfix expression
// function evaluatePostfix(exp) {
//   //create a stack
//   let stack = [];

//   // Scan all characters one by one
//   for (let i = 0; i < exp.length; i++) {
//     let c = exp[i];

//     // If the scanned character is an operand (number here),
//     // push it to the stack.
//     if (!isNaN(parseInt(c))) stack.push(c.charCodeAt(0) - "0".charCodeAt(0));
//     // If the scanned character is an operator, pop two
//     // elements from stack apply the operator
//     else {
//       let val1 = stack.pop();
//       let val2 = stack.pop();

//       switch (c) {
//         case "+":
//           stack.push(val2 + val1);
//           break;

//         case "-":
//           stack.push(val2 - val1);
//           break;

//         case "/":
//           stack.push(val2 / val1);
//           break;

//         case "*":
//           stack.push(val2 * val1);
//           break;
//       }
//     }
//   }
//   return stack.pop();
// }

// console.log(evaluatePostfix("231*+9-")); // -4

// --------------------------------------------------------------------------------------------------------------------------------------------------

// // Javascript program to implement queue

// // Queue class
// class Queue {
//   // Array is used to implement a Queue
//   constructor() {
//     this.items = [];
//   }

//   // enqueue function
//   enqueue(element) {
//     // adding element to the queue
//     this.items.push(element);
//   }

//   // dequeue function
//   dequeue() {
//     // removing element from the queue
//     // returns underflow when called
//     // on empty queue
//     if (this.isEmpty()) return "Underflow";
//     return this.items.shift();
//   }

//   // front function
//   front() {
//     // returns the Front element of
//     // the queue without removing it.
//     if (this.isEmpty()) return "No elements in Queue";
//     return this.items[0];
//   }

//   // isEmpty function
//   isEmpty() {
//     // return true if the queue is empty.
//     return this.items.length == 0;
//   }

//   // printQueue function
//   printQueue() {
//     let str = "";
//     for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
//     return str;
//   }
// }

// // creating object for queue class
// let queue = new Queue();

// // Testing dequeue and pop on an empty queue
// // returns Underflow
// console.log(queue.dequeue());

// // returns true
// console.log(queue.isEmpty());

// // Adding elements to the queue
// // queue contains [10, 20, 30, 40, 50]
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(60);

// // returns 10
// console.log(queue.front());

// // removes 10 from the queue
// // queue contains [20, 30, 40, 50, 60]
// console.log(queue.dequeue());

// // returns 20
// console.log(queue.front());

// // removes 20
// // queue contains [30, 40, 50, 60]
// console.log(queue.dequeue());

// // printing the elements of the queue
// // prints [30, 40, 50, 60]
// console.log(queue.printQueue());

// --------------------------------------------------------------------------------------------------------------------------------------

// // Javascript program to implement queue using stacks

class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.size = 0;
  }

  enqueue(val) {
    this.pushStack.push(val);
    this.size = this.pushStack.size() + this.popStack.size();
  }

  dequeue() {
    if (this.popStack.size() > 0) {
      this.size = this.pushStack.size() + this.popStack.size() - 1;
      return this.popStack.pop();
    }

    while (this.pushStack.size() > 0) {
      this.popStack.push(this.pushStack.pop());
    }

    this.size = this.pushStack.size() + this.popStack.size() - 1;
    return this.popStack.pop();
  }
}

// Driver code
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
