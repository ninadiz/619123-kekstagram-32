const imageListCount = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, которая выбирает случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const descriptionExamples = [
  'Описание один', 'Описание два', 'Описание три', 'Описание четыре', 'Описание пять', 'Описание шесть',
];

const messageExamples = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentatorNames = ['Азат', 'Арзамат', 'Амарзат;, ;Атмарзат', 'Амартзан', 'Армарзан'];

// Функция создания комментариев к фотографиям
const createComments = function() {
  return {
    id: 135, // любок число, но не должно повторяться
    avatar: `img/avatar${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(messageExamples),
    name: getRandomArrayElement(commentatorNames),
  };
};

// Функция создания объектов, содержащих параметры загруженных картинок
const createImageParams = function(idIndex) {
  return {
    id: idIndex, // Порядковый номер от 1 до 25!? Не повторяются.
    url: `photos/${idIndex}.jpg`, // Зависит от id
    description: getRandomArrayElement(descriptionExamples),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComments),
  };
};

const imageList = Array.from({length: imageListCount}, (__, idIndex) => createImageParams(idIndex + 1));
console.log(imageList);
