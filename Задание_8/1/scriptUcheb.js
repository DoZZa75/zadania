const user = {
  name: "Pupkin",
  age: 25,
  profession: "molodec",
  salary: 10000,
};
// user.passport = "jsomq2w";
Object.defineProperty(user, "passport", {
  value: "jsomq2w",
  enumerable: true,
});

console.log(user);


let keys = Object.keys(user);
console.log(keys); // massive

let values = Object.values(user);
console.log(values); // massive

let entries = Object.entries(user);
console.log(entries); // massive
entries.map(([index, item]) => console.log(index, item));
