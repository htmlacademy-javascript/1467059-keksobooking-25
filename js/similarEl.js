import {newObject} from '/js/data.js';

const similarNotices = Array.from({length: 1}, newObject);
const noticeWindow = document.querySelector('.map__canvas');
const noticeCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const typesDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

similarNotices.forEach(({author, offer}) => {
  const noticeCardEl = noticeCardTemplate.cloneNode(true);
  const title = noticeCardEl.querySelector('.popup__title');
  const address = noticeCardEl.querySelector('.popup__text--address');
  const apartmentType = noticeCardEl.querySelector('.popup__type');
  const price = noticeCardEl.querySelector('.popup__text--price');
  const capacity = noticeCardEl.querySelector('.popup__text--capacity');
  const checkTime = noticeCardEl.querySelector('.popup__text--time');
  const description = noticeCardEl.querySelector('.popup__description');
  const avatar = noticeCardEl.querySelector('.popup__avatar');

  title.textContent = offer.title;
  address.textContent = offer.address;
  apartmentType.textContent = typesDictionary[offer.type];
  price.textContent = `${offer.price} ₽/ночь`;
  capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  description.textContent = offer.description;
  avatar.src = author.avatar;

  const getPhotos = () => {
    const photosContainer = noticeCardEl.querySelector('.popup__photos');
    const photosFragment = document.createDocumentFragment();

    for (let i = 0; i < offer.photos.length - 1; i++) {
      const newElement = noticeCardEl.querySelector('.popup__photo').cloneNode(false);
      newElement.src = offer.photos[i];
      photosFragment.appendChild(newElement);
    }

    photosContainer.textContent = '';
    photosContainer.appendChild(photosFragment);
  };

  getPhotos();

  noticeWindow.appendChild(noticeCardEl);

  const getApartmentFeatures = () => {
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
  };

  getApartmentFeatures ();

});

