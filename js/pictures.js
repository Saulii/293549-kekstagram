// объявляю константы 
var LIKES_MIN = 15;
var LIKES_MAX = 250;
var PICTURES_QUANTITY = 25;

//объявляю массив, чтобы потом генерировать в него созданые объекты
var arrPicture = [];

//функция, генерирующая случайные числа из заданного диапазона
var getRandomNumberFromRange = function(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};
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
};
// добавляем объекты в массив
for (var i = 1; i <= PICTURES_QUANTITY; i++) {
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
var imageLinkTemplate = document.querySelector('#picture-template').content;
//функция, заполняем данными элементы картинки 
var setPictureInfoFromMockData = function(pictureParts, mockData) {
  var imgElement = pictureParts.img;
  var likeElement = pictureParts.like;
  var commentElement = pictureParts.comment;
  imgElement.setAttribute('src', mockData.url);
  likeElement.textContent = mockData.likes;
  commentElement.textContent = mockData.comments.length;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < arrPicture.length; i++) {
  var imageLinkElement = imageLinkTemplate.cloneNode(true);
  var imagePictureParts = {
    img: imageLinkElement.querySelector('img'),
    like: imageLinkElement.querySelector('.picture-likes'),
    comment: imageLinkElement.querySelector('.picture-comments')
  };
  var pictureData = arrPicture[i];
  setPictureInfoFromMockData(imagePictureParts, pictureData);
  fragment.appendChild(imageLinkElement);
}
picturesContainer.appendChild(fragment);

var firstDataElement = arrPicture[0];
var galleryElement = document.querySelector('.gallery-overlay');
var galleryPictureParts = {
  img: galleryElement.querySelector('.gallery-overlay-image'),
  like: galleryElement.querySelector('.likes-count'),
  comment: galleryElement.querySelector('.comments-count')
};
setPictureInfoFromMockData(galleryPictureParts, firstDataElement);
//показываем элемент на сайте

var pictureClickHeandler = function(){
  galleryElement.classList.remove('hidden');
};
  
galleryElement.addEventListener('click', pictureClickHeandler);
console.log(pictureClickHeandler);

var formElementUpload = document.querySelector('#upload-form');
var formOverlay = document.querySelector('.upload-overlay');
var formChangeHeandler = function(){
  formOverlay.classList.remove('hidden');
};

formElementUpload.addEventListener('click', formChangeHeandler());