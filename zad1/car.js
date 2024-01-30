const carName = "BMW";
let maxCarSpeed = prompt("Введи максимальную скорость авто");
let carOwner = prompt("Введите имя владельца");

alert(
  `Название машины: ${carName}, максимальная скорость: ${maxCarSpeed}, владелец машины: ${carOwner}`
);

maxCarSpeed = 150;
console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

maxCarSpeed = 170;
console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

maxCarSpeed = 180;
console.log(
  `Максимальная скорость измененна, сейчас она состовляет: ${maxCarSpeed}`
);

carOwner = 'Стас';
console.log(`Сменился владелец, владельцем стал: ${carOwner}`);
carOwner = 'Слава';
console.log(`Сменился владелец, владельцем стал: ${carOwner}`);
carOwner = 'Коля';
console.log(`Сменился владелец, владельцем стал: ${carOwner}`);
