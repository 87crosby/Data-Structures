class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the "top" of our stack here?

class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.stack_size = 0
    }
    // push(value) - adds the given value to the stack
    push(value) {
        var new_node = new ListNode(value)
        
        if(this.head == null && this.tail == null){
            this.head = new_node
            this.tail = new_node
        }

        else{
            new_node.next = this.head
            this.head = new_node
        }
        this.stack_size++
    }
    

    // pop() - removes the top value from stack and returns it
    pop() {
        // if no values
        if (this.head == null && this.tail == null) {
            return undefined;
        }

        // only one value
        else if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
            this.stack_size --;
            return this.value;
        }

        // two or more values
        else {
            var oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            this.stack_size --;
            return oldHead.value;
        }
    }

    // top() - returns the top value without removing it
    top() {
        return this.head.value
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        var runner = this.head
        while(runner != null){
            if (runner == target){
                return true
            }
            runner = runner.next
        }
        return false 
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        return(this.head == null && this.tail == null)
    }

    // size() - returns the size of the stack

    size() {
        return this.stack_size
    }
}

// bonus - we can make this much quicker to run, at the expense
// of a slight descrease of speed in the push/pop operations

var x = new SLLStack();

x.push(6)
x.push(8)
x.push(14)
x.push(23)
console.log(x.size())
console.log(x.contains(14));
console.log(x.contains(329));
console.log(x.top());
console.log(x.pop());
console.log(x.size())
console.log(x.isEmpty())
