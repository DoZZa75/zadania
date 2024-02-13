let userText = prompt('Введите текст');
userText = userText.trim();

let wordFromText = prompt('Введите слово из текста');
wordFromText = wordFromText.trim();

let indexOfWord = userText.indexOf(wordFromText);

let resultString = userText.slice(0, indexOfWord + wordFromText.length); // Обрезка строки до указанного слова

alert(`Результат: ${resultString}`);