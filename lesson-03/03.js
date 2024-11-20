// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber, secondNumber, thirdNumber) {
  let bigNumber 
  if (firstNumber >= secondNumber){
    bigNumber = firstNumber 
  } else { 
    bigNumber = secondNumber
  }
  if (thirdNumber >= bigNumber) {
    bigNumber = thirdNumber
  } 
  return bigNumber
}
