/**
 * Started from the Object Orientated Programming part:
 *  59:34
 */

 // Non ES6 Way
 // Constructor function
 function Person(firstName, lastName, dob) {
     this.firstName = firstName;
     this.lastName = lastName;
     this.dob = new Date(dob);
     this.getBirthYear = () => {
         return this.dob.getFullYear();
     }
     this.getFullName = () => {
         return `${this.firstName} ${this.lastName}`;
     }
 }

 // Instatiate object
const person1 = new Person("AJ", "DLC", "4/20/1980");
console.log(person1.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());


