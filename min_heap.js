class MinHeap{
    constructor(){
        this.heap = [null]
    }

    insert(val){
        //push the val into the heap
        this.heap.push(val)

        //from here, add logic to see if the value that was inserted is at the right place following the rules of a min heap. 
        //calculate the parent from the current index (new value is pushed to last index--> this.heap.length-1)

        //while the parent is greater than the child, do some swapping
        console.log('the heap is ', this.heap);
        
        if(this.heap.length == 2){
            return this;
        }

        let newValIndex = this.heap.length-1;
        let parentIndex = Math.floor(newValIndex /2);
        
        if(this.heap[parentIndex] < this.heap[newValIndex]){
            return this;
        } else {
            while(this.heap[parentIndex] > this.heap[newValIndex]){
                [ this.heap[parentIndex] , this.heap[newValIndex] ] = [  this.heap[newValIndex], this.heap[parentIndex]];

                newValIndex = parentIndex;
                parentIndex = Math.floor(newValIndex / 2);
            }
        }
        return this;

    }
}




let heap1 = new MinHeap()

console.log(heap1)

heap1.insert(6)