// объявляю константы 
var LIKES_MIN = 15;
var LIKES_MAX = 250;
var PICTURES_QUANTITY = 25;

//объявляю массив, чтобы потом генерировать в него созданые объекты
var arrPicture = [];

//функция, генерирующая случайные числа из заданного диапазона
var getRandomNumberFromRange = function (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
  //объявляю массив строк для генерации рандомных комментариев 
var mockComments = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var mockCommentsLength = mockComments.length;

var getArrayWithComments = function() {

  var randomCommentsNumber = getRandomNumberFromRange(1, 2); //Для комментария нужно взять одно или два случайных предложений из предложенных ниже//
  var randomComments = [];
  for (var i = 1; i <= randomCommentsNumber; i++) {
  	var randomCommentIndex = getRandomNumberFromRange(0, mockCommentsLength - 1);
    var randomComment = mockComments[randomCommentIndex];
  	randomComments.push(randomComment);
  }
  return randomComments;
}
// добавляем объекты в массив
for (var i = 1; i <= PICTURES_QUANTITY; i++){
	var randomLikesNumber = getRandomNumberFromRange(LIKES_MIN, LIKES_MAX);
	var randomComments = getArrayWithComments();
	var photoObject = {
  	url: 'photos/' + i + '.jpg',
    likes: randomLikesNumber,
    comments: randomComments
  };
  arrPicture.push(photoObject); 
}

var picturesContainer = document.querySelector('.pictures');
//показываем элемент на сайте//
var galleryElement = document.querySelector('.gallery-overlay');
galleryElement.classList.remove('hidden');
var imageLinkTemplate = document.querySelector('#picture-template').content;
//функция, клонируем элементы 
var getPictureElements = function(){
  var imageLinkElement = imageLinkTemplate.cloneNode(true);
  var imgElement = imageLinkElement.querySelector('img');
  imgElement.setAttribute('src', arrPicture[i].url);
  var likeElement = imageLinkElement.querySelector('.picture-likes');
  likeElement.textContent = arrPicture[i].likes;
  var commentElement = imageLinkElement.querySelector('.picture-comments');
  commentElement.textContent = arrPicture[i].comments.length;
  var imageGalleryElem = imageLinkElement.querySelector('img');
  imageGalleryElem.textContent = arrPicture[i].url;
  return imageLinkElement
}
var fragment = document.createDocumentFragment();
for (var i = 0; i < arrPicture.length; i++) {
  var pictureObj = arrPicture[i];
  fragment.appendChild(getPictureElements(pictureObj));
}
picturesContainer.appendChild(fragment);

  
          














