const UserLogin = "Стас";
const UserPassword = "112233";

// Запрашиваем у пользователя логин и пароль
const Login = prompt("Введите логин");
const Password = prompt("Введите пароль");

// Убираем лишние пробелы с начала и конца введенных данных
const trimmedUserLogin = Login.trim();
const trimmedUserPassword = Password.trim();

// Проверяем введенные данные
if (trimmedUserLogin === UserLogin && trimmedUserPassword === UserPassword) {
    alert("Добро пожаловать, " + trimmedUserLogin + "!");
} else {
    alert("Логин и (или) Пароль введены неверно!");
}