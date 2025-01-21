/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */


/**
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Проверяем, что входной параметр не null/undefined и является строкой
  if (str === null || typeof str !== 'string') {
      return false;
  }
  
  // Удаляем пробелы в начале и конце строки
  str = str.trim();
  
  // Проверяем, что строка не пустая
  if (str.length === 0) {
      return false;
  }
  
  // Проверяем, является ли строка числом
  return !isNaN(str) && !isNaN(parseFloat(str));
}

console.log(isNumeric("123"))     // true
console.log(isNumeric("12.3"))    // true
console.log(isNumeric("123abc"))  // false
console.log(isNumeric("abc"))     // false
console.log(isNumeric(" "))       // false