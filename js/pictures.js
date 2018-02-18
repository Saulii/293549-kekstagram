// объявляю переменные 
var LIKES_MIN = 15;
var LIKES_MAX = 250;

//объявляю массив 
var arrPicture = [];

//функция, генерирующая случайные числа из заданного диапазона
var getRandomNumberFromRange = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
  
//массив строк
var mockComments = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var mockCommentsLength = mockComments.length;


var getArrayWithComments = function() {
  var randomCommentsNumber = getRandomNumberFromRange(1, 2);
  var randomComments = [];
  for (var i = 1; i <= randomCommentsNumber; i++) {
  	var randomCommentIndex = getRandomNumberFromRange(0, mockCommentsLength - 1);
    var randomComment = mockComments[randomCommentIndex];
  	randomComments.push(randomComment);
  }
  return randomComments;
}

// добавляем объекты в массив
for (var i = 1; i <= 25; i++) {
	var randomLikesNumber = getRandomNumberFromRange(LIKES_MIN, LIKES_MAX);
	var randomComments = getArrayWithComments();
	var photoObject = {
  	url: 'photos/' + i + '.jpg',
    likes: randomLikesNumber,
    comments: randomComments
  };
  arrPicture.push(photoObject); 
}

console.log(arrPicture);


//функция, клонируем элементы 
var picturesContainer = document.querySelector('.pictures');
var picturesGallery = document.querySelector('.gallery-overlay');
var imageLinkTemplate = document.querySelector('#picture-template').content;
var fragment = document.createDocumentFragment();
for (var i = 0; i < arrPicture.length; i++) {
  var imageLinkElement = imageLinkTemplate.cloneNode(true);
  var imgElement = imageLinkElement.querySelector('img');
  imgElement.setAttribute('src', arrPicture[i].url);
  var likeElement = imageLinkElement.querySelector('.picture-likes');
  likeElement.setAttribute('span', arrPicture[i].likes);
  var commentElement = imageLinkElement.querySelector('.picture-comments');
  commentElement.setAttribute('span', arrPicture[i].comments);
  fragment.appendChild(imageLinkElement);

  }

picturesContainer.appendChild(fragment);


//показываем элемент на сайте
var showElement = document.querySelector('.gallery-overlay');
showElement.classList.remove('hidden');










