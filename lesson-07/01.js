/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

let names = ["hello", "world", "from", "javascript"];

let newNames = [];

function capitalizeWords(namesArray) {
  for ( let i = 0; i < namesArray.length; i++) {
    let name = namesArray[i];
    let firstLetter = name.charAt(0).toUpperCase();
    newNames.push(firstLetter + name.slice(1))
  }
}
capitalizeWords (["hello", "world", "from", "javascript"])
console.log (newNames);
