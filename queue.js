'use strict'

const queue={
    q_sort_priority: [],
    q_sort_timeAdd: [],
    "enqueue":(item, priorety)=>{
        const element = {item, priorety};
        this.q_sort_timeAdd.push(element);
        let i = this.q_sort_priority.length;
        while( i>=0 && this.q_sort_priority[i].priority> priorety){
            i--;
        }
        this.q_sort_priority.splice(i+1, 0 , element)
    },
    "dequeue":(cas)=>{
        switch(a){ //"highest, lowest, oldest, newest"
            case "highest":
            case "lowest":
            case "oldest":
            case "newest":
        }
        
    }
}
queue.enqueue("pingvin", 5);
queue.enqueue("radic", 3);
queue.enqueue("dog", 7);
console.dir(queue.q_sort_priority);
console.dir(queue.q_sort_timeAdd);

