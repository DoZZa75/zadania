 for (let i = 0; i < people.length; i++) {
     console.log(people[i])
 }

 for (let person of people) {
   console.log(person);
 }

 ForEach
 people.forEach(function (person, index, pArr) {
   console.log(person);
 });
 people.forEach((person) => console.log(person));

Map
 const newPeople = people.map((person) => {
   return person.name;
 });
 console.log(newPeople);

Filter
 const adults = people.filter((person) => {
   if (person.age >= 18) {
     return true;
   }
 });
 console.log(adults);

 const adults = people.filter((person) => person.age => 18);
 console.log(adults);

Reduce
 let amount = 0;
 for (let i = 0; i < people.length; i++) {
   amount += people[i].budget;
 }
 console.log(amount);

 const amount = people.reduce((total, person) => {
   return total + person.budget;
 }, 0);

 const amount = people.reduce((total, person) => total + person.budget, 0);
 console.log(amount);

Find
 const igor = people.find((person) => person.name === "Igor");
 console.log(igor);

FindIndex
 const igorIndex = people.findIndex((person) => person.name === "Igor");
 console.log(igorIndex);