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
        this.q_sort_priorety.splice(i+1, 0 , element)
    },
    dequeue(cas){
        let element;
        switch(a){ //"highest, lowest, oldest, newest"
            case "highest":
                element = this.q_sort_priorety[this.q_sort_priorety.length - 1]
            case "lowest":
                element = this.q_sort_priorety[0]
            case "oldest":
                element = this.q_sort_timeAdd[0]
            case "newest":
                element = this.q_sort_timeAdd[this.q_sort_ti.length - 1]
        }
        this.q_sort_timeAdd = this.q_sort_timeAdd.filter(e => e !== element);
        this.q_sort_priorety = this.q_sort_priorety.filter(e => e !== element);
    },
    peek(){
        
    }
}
queue.enqueue("pingvin", 5);
queue.enqueue("radic", 3);
queue.enqueue("dog", 7);
console.table(queue.q_sort_priorety);
console.dir(JSON.stringify(queue.q_sort_timeAdd));

