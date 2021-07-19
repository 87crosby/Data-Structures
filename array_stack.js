class ArrayStack {
    constructor() {
        this.contents = [];
    }

    // push(value) - adds the given value to the stack
    push(value) {
        this.contents.push(value)
        return this
    }

    // pop() - removes the top value from stack and returns it
    pop() {
        return this.contents.pop()
    }
    
    // top() - returns the top value without removing it
    top() {
        return this.contents[this.contents.length - 1]
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        for(var i=0;i<this.contents.length;i++){
            if (this.contents[i] == target){
                return true
            }
        }
        return false
    }

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if(this.contents.length == 0){
            return true
        }
        else{
            return false
        }
    }

    // size() - returns the size of the stack
    size() {
        return this.contents.length
    }
}

// make sure you test all six methods!
// make sure that you test any edge cases you find using these methods as well

var x = new ArrayStack();
x.push(1)
x.push(2)
x.push(3)
x.push(4)
x.push(5)
x.push(6)
console.log(x.size(4))