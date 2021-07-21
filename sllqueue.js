class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
        var new_node = new ListNode(value);

        if (this.head == null && this.tail == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    
    // dequeue() - removes the top value from queue and returns it
    dequeue() {
        if (this.head == null && this.tail == null) {
            return undefined;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        else if (this.head.next == this.tail) {
            var temp = this.tail;
            this.head.next = null;
            this.tail = this.head;
            return temp.value;
        }

        else {
            var runner = this.head
            while (runner.next.next != null) { // while( runner.next != this.tail)
                runner = runner.next;
                var temp = runner
            }
            var x = temp.next
            this.tail = temp
            this.tail.next = null
            return x.value
        }

    }

    // front() - returns the top value without removing it
    front() {
        return this.head.value

    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }

        return false;

    }

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null);
    }

    // size() - returns the size of the queue
    size() {
        var runner = this.head
        var count = 0
        while (runner != null) {
            runner = runner.next;
            count = count + 1
        }
        return count
    }

    // method: compareQueues
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    compareQueues(other_queue) {
        if(this.size() != other_queue.size()){
            return false
        }
        var runner = this.head
        var runner2 = other_queue.head
        while (runner != null && runner2 != null) {
            if(runner.value == runner2.value){
                runner = runner.next
                runner2 = runner2.next
            }
            else{
                return false
            } 
        }
        return true
    }

    display() {
        var output = '';

        var runner = this.head;

        if (runner == null) {
            return 'empty';
        }

        while (runner.next != null) {
            output += runner.value + ' - ';
            runner = runner.next;
        }

        output += runner.value;

        return output;
    }
}

function generateNewList(length, min_value, max_value) {
    var generated_sll = new SLLQueue();
    for (let i = 0; i < length; i++) {
        generated_sll.enqueue(
            Math.round(Math.random() * (max_value - min_value) + min_value)
        );
    }
    return generated_sll;
}

function generateSLLFromArray(input) {
    var new_nodelist = new SLLQueue();
    for (var i = 0; i < input.length; i++) {
        new_nodelist.enqueue(input[i])
    }
    return new_nodelist
}

null_list = new SLLQueue();
single_list = generateSLLFromArray([8]);
two_list_a = generateSLLFromArray([1, 10]);
two_list_b = generateSLLFromArray([10, 1]);
three_list_a = generateSLLFromArray([5, 6, 3]);
three_list_b = generateSLLFromArray([2, 5, 6]);
three_list_c = generateSLLFromArray([6, 5, 2]);
three_list_d = generateSLLFromArray([6, 5, 2]);
random_a = generateNewList(20, -10, 10);
random_b = generateNewList(15, -20, 20);
other_list = generateSLLFromArray([8, 1, 1, 7, 1]);
other_list_b = generateSLLFromArray([8, 1, 1, 5, 8, 7, 1]);

testlist_1 = generateSLLFromArray([1,1,1,1,1,1])
testlist_2 = generateSLLFromArray([1,1,1,1,1])

console.log(testlist_1.compareQueues(testlist_2));
null_list.enqueue(1)
console.log(null_list.display()); 