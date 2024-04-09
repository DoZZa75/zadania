const newPeople = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: ${person.name} (${person.age}),
      budget: person.budget,
    };
  });

console.log(newPeople);

