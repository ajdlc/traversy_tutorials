/**
 * Started from the Object Orientated Programming part:
 *  59:34
 */

 // Create a class (ES6 style also known as Syntatic Sugar) -- The same exact thing is happening above
 class Person {
     constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
     }

     // This is the same as using the prototype method above
     getBirthYear() {
        return this.dob.getFullYear();
     }

     getFullName() {
        return `${this.firstName} ${this.lastName}`;
     }
 }

 // Instatiate object
const person1 = new Person("AJ", "DLC", "4/20/1980");
console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());


