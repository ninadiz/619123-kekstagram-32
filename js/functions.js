// Функция для проверки длины строки

function checkStringLength (string, maxLength) {
  return (string.length <= maxLength);
}

checkStringLength('Example',8);

// Функция для проверки на палиндром

function checkPalindrom (string) {
  let stringNormalized = (string.replaceAll(' ',''));
  stringNormalized.toUpperCase()
  return stringNormalized.length;
}

console.log(checkPalindrom('kayak'));
