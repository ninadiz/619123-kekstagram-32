// Функция для проверки длины строки
// Через стрелочную функцию - const checkStringLength => string.length <= maxLength

function checkStringLength(string, maxLength) {
  return (string.length <= maxLength);
}

checkStringLength('Example',2);

// Функция для проверки на палиндром

function isPalindrom (string) {
  const stringCleaned = string.toLowerCase().replaceAll(' ', '');
  // или можно в две строки: сначала применится верхняя строка, потом нижняя

  let stringReversed = '';

  for (let i = stringCleaned.length - 1; i >= 0; i--) {
    stringReversed += stringCleaned[i];
  }
  // или можно массивом

  return string === stringReversed;
}

isPalindrom('kayak');

// 5.16. Функции возвращаются


