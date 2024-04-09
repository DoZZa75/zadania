 
 function giveTalonsInOrder(patients, orders) {
   const sortedPatients = [];
   for (const order of orders) {
     const patient = patients.find((p) => p.id === order);
     if (patient) {
       sortedPatients.push(patient);
     }
   }
   return sortedPatients;
 }

 const ordersArr = [4, 2, 1, 3];
 const people = [
   { id: 1, name: "Стас" },
   { id: 2, name: "Коля" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Мотя" },
 ];

 const result = giveTalonsInOrder(people, ordersArr);
 console.log("result", result);
