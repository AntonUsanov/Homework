let person1 = {
    name: 'Anton',
    age: 29,
    city: 'Poltava',
    company: 'CACJ',
    position: 'curator',
    salary: '',
};

let person2 = {
    name: 'Nikolai',
    age: 42,
    city: 'Poltava',
    company: 'ELSIS',
    position: 'director',
};

console.log(person1.name <= person2.name);
console.log(person1.name < person2.name);
console.log(person1.age <= person2.age);
console.log(person1.company != person2.company);
console.log(person1.position < person2.position);
console.log(person1.name != person2.company);
console.log(person1.name < person2.name, person1.position < person2.position);
//console.log(person1.salary ?? "no information");