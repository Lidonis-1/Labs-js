'use strict';


// функція пошуку номерів в масиві об'єктів
const phoneBook = [
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Seneca', phone: '+380667778899'},
    {name: 'Epictetus', phone: '+380999001122'},
    {name: 'Zeno of Citium', phone: '+380123456789'},
    {name: 'Chrysippus', phone: '+380555666777'},
    {name: 'Diogenes of Sinope', phone: '+380888777666'},
    {name: 'Cicero', phone: '+380111222333'},
    {name: 'Plato', phone: '+380444555666'},
]
{    
const findPhoneByName = (name_arg) => {
    for (const person of phoneBook) {
        if (person.name === name_arg) {
            return person.phone;
        }
    }
}
console.log( findPhoneByName('Cicero') );
}


// функція пошуку номерів в о'бєкті
const newPhoneBook = {};
for (const person of phoneBook) {
    newPhoneBook[person.name] = person.phone;
}

const findPhoneByName = (name) => {
    for (const key in newPhoneBook) {
        if (key === name) {
            return newPhoneBook[key];
        }
    }
}
console.log( findPhoneByName('Plato') );
