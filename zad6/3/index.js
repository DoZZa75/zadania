function getDivisorsCount(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
      if (a % i === 0) {
        count++;
      }
    }
  
    return count;
  }
  console.log(getDivisorsCount(5));