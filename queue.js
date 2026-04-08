'use strict'

const queue={
    q_sort_priorety: [],
    q_sort_timeAdd: [],
    enqueue(item, priorety){
        const element = {item, priorety};
        this.q_sort_timeAdd.push(element);
        let i = this.q_sort_priorety.length -1;
        while( i>=0 && this.q_sort_priorety[i].priorety > priorety){
            i--;
        }
        this.q_sort_priorety.splice(i+1, 0 , element);
    },
    dequeue(cas){
        let element;
        switch(cas){ //"highest, lowest, oldest, newest"
            case "highest":
                element = this.q_sort_priorety[this.q_sort_priorety.length - 1];
                break
            case "lowest":
                element = this.q_sort_priorety[0];
                break
            case "oldest":
                element = this.q_sort_timeAdd[0];
                break
            case "newest":
                element = this.q_sort_timeAdd[this.q_sort_timeAdd.length - 1];
                break
        }
        this.q_sort_timeAdd = this.q_sort_timeAdd.filter(e => e !== element);
        this.q_sort_priorety = this.q_sort_priorety.filter(e => e !== element);
    },
    peek(cas){
        
        switch(cas){ //"highest, lowest, oldest, newest"
            case "highest":
                return this.q_sort_priorety[this.q_sort_priorety.length - 1]
            case "lowest":
                return this.q_sort_priorety[0]
            case "oldest":
                return this.q_sort_timeAdd[0]
            case "newest":
                return this.q_sort_timeAdd[this.q_sort_timeAdd.length - 1]
        }
        
    }
}
queue.enqueue("pingvin", 5);
queue.enqueue("radic", 3);
queue.enqueue("dog", 7);
queue.enqueue("cat", 6);
queue.enqueue("pig", 7);
queue.enqueue("colibri", 9);
queue.enqueue("fog", 2);
console.table(queue.q_sort_priorety);
console.table(queue.q_sort_timeAdd);
queue.dequeue("highest");
queue.dequeue("oldest");
console.table(queue.q_sort_priorety);
console.table(queue.q_sort_timeAdd);
console.log(queue.peek("highest"));
console.log(queue.peek("oldest"));
console.log(queue.peek("lowest"));
console.log(queue.peek("newest"));
