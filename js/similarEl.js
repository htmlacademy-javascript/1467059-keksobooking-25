import {newObject} from '/js/data.js';

const noticeWindow = document.querySelector('.map__canvas');
const noticeCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarNotices = Array.from({length: 1}, newObject);

similarNotices.forEach(({author, location, offer}) => {
  const noticeCardEl = noticeCardTemplate.cloneNode(true);
  noticeCardEl.querySelector('.popup__title').textContent = offer.title;
  noticeCardEl.querySelector('.popup__text--address').textContent = offer.address;




  noticeCardEl.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  noticeCardEl.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  noticeCardEl.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  noticeCardEl.querySelector('.popup__description').textContent = offer.description;

  const photosContainer = noticeCardEl.querySelector('.popup__photos');
  const photosFragment = document.createDocumentFragment();

  for (let i = 0; i < offer.photos.length - 1; i++) {
    const newElement = noticeCardEl.querySelector('.popup__photo').cloneNode(false);
    newElement.src = offer.photos[i];
    photosFragment.appendChild(newElement);
  }

  photosContainer.textContent = '';
  photosContainer.appendChild(photosFragment);

  noticeCardEl.querySelector('.popup__avatar').src = author.avatar;

  noticeWindow.appendChild(noticeCardEl);

  const apartmentFeatures = offer.features;
  const featuresContainer = document.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  featuresList.forEach((featuresListItem) => {
    const isInclude = apartmentFeatures.some(
      (apartmentFeature) => featuresListItem.classList.contains(`popup__feature--${apartmentFeature}`),
    );

    if(!isInclude) {
      featuresListItem.remove();
    }
  });
});

