class Node{
    constructor(valueInput){
        this.value = valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    //add to back
    addToBack(valueInput){
        //create a node with that valueInput
        let newNode = new Node(valueInput);

        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        return this;

    }


    //add to front
    addToFront(valueInput){
        //create a node with that valueInput
        let newNode = new Node(valueInput);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }



    //remove from back
    removeFromBack(){
        if(this.head == null){
            console.log("nothing to remove fam")
        }else if(this.head == this.tail){
            this.head = null;
            this.tail = null
        }
        else{
            let temp = this.tail.prev;
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next = null;
        }
        return this;
    }


    //remove from front
    removeFromFront(){
        if(this.head == null){
            console.log("nothing to remove fam")
        }else if(this.head == this.tail){
            this.head = null;
            this.tail = null
        }else{
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            this.head.prev = null;
        }
        return this;
    }


    //print values forward
    printValuesForward(){
        var runner = this.head;
        var result = "";
        while(runner != null){
            result += runner.value + "--->"
            runner = runner.next
        }
        console.log(result);
        return this;
    }


    //print values backwards
    printValuesBackward(){
        var runner = this.tail;
        var result = "";
        while(runner != null){
            result += runner.value + "--->"
            runner = runner.prev;
        }
        console.log(result);
        return this;
    }

    reverse(){

        return this;
    }

    

}



let dll1 = new DLL();
dll1.addToBack(5).addToBack(23).addToBack(3).addToBack(15).printValuesForward().reverse().printValuesForward()