"use strict"

class queue{
    constructor(){
        this.q_sort_priorety = []
        this.q_sort_timeAdd = []
    }

    enqueue(item, priorety){
        elemnt = {item, priorety}

        this.q_sort_timeAdd.push(element)
        i =  this.q_sort_priorety.length - 1
        while (i>0 && this.q_sort_priorety[i].priorety > priorety){
            i--
        }
        this.q_sort_priorety.splice(i+1, 0, element)
    }
    dequeue(cas){
        let element;
        switch(cas){
            case "highest":
                
            case "":
            case"d":
            case"s":
        this.q_sort_priorety = this.q_sort_priorety.filter(a => a !== element);
        this.q_sort_timeAdd = this.q_sort_timeAdd.filter(a=> a !== element);
        
    }
    }
}