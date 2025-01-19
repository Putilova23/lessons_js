/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

const string1 = "hello world from javascript"

function capitalizeWords(stringValue) {

  let newNames = []
  const parseStringInArray = stringValue.split(" ")

  for ( let i = 0; i < parseStringInArray.length; i++) {
    let name = parseStringInArray[i];
    let firstLetter = name.charAt(0).toUpperCase();
    newNames.push(firstLetter + name.slice(1))
  }

  return newNames.join(" ")
}

const newNames123 = capitalizeWords (string1)
console.log (newNames123);
