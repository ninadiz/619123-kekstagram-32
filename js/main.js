const IMAGE_LIST_LENGTH = 25;

const LIKES_COUNT_MIN = 15;
const LIKES_COUNT_MAX = 200;
const COMMENTS_COUNT_MIN = 0;
const COMMENTS_COUNT_MAX = 30;

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

const makeCommentIdGenerator = function() {
  let commentId = 0;
  return function() {
    commentId += 1;
    return commentId;
  };
};

const generateCommentId = makeCommentIdGenerator();

// Функция создания комментариев к фотографиям
const createComments = function() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(messageExamples),
    name: getRandomArrayElement(commentatorNames),
  };
};

// Функция создания объектов, содержащих параметры загруженных картинок
const createImageParams = function(idIndex) {
  return {
    id: idIndex,
    url: `photos/${idIndex}.jpg`,
    description: getRandomArrayElement(descriptionExamples),
    likes: getRandomInteger(LIKES_COUNT_MIN, LIKES_COUNT_MAX),
    comments: Array.from({length: getRandomInteger(COMMENTS_COUNT_MIN, COMMENTS_COUNT_MAX)}, createComments),
  };
};

Array.from({length: IMAGE_LIST_LENGTH}, (__, idIndex) => createImageParams(idIndex + 1));
