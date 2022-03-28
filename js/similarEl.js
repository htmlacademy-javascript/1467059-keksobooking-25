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
  const features = noticeCardEl.querySelectorAll('.popup__feature');
  const title = noticeCardEl.querySelector('.popup__title');
  const address = noticeCardEl.querySelector('.popup__text--address');
  const apartmentType = noticeCardEl.querySelector('.popup__type');
  const price = noticeCardEl.querySelector('.popup__text--price');
  const capacity = noticeCardEl.querySelector('.popup__text--capacity');
  const checkTime = noticeCardEl.querySelector('.popup__text--time');
  const description = noticeCardEl.querySelector('.popup__description');
  const photos = noticeCardEl.querySelector('.popup__photos');
  const avatar = noticeCardEl.querySelector('.popup__avatar');

  if (title) {
    title.textContent = offer.title;
  } else {
    title.classList.add('hidden');
  }

  if (address) {
    address.textContent = offer.address;
  } else {
    address.classList.add('hidden');
  }

  if (apartmentType) {
    apartmentType.textContent = typesDictionary[offer.type];
  } else {
    apartmentType.classList.add('hidden');
  }

  if (price) {
    price.textContent = `${offer.price} ₽/ночь`;
  } else {
    price.classList.add('hidden');
  }

  if (capacity) {
    capacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    capacity.classList.add('hidden');
  }

  if (checkTime) {
    checkTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    checkTime.classList.add('hidden');
  }

  if (description) {
    description.textContent = offer.description;
  } else {
    description.classList.add('hidden');
  }

  if (avatar) {
    avatar.src = author.avatar;
  } else {
    avatar.classList.add('hidden');
  }

  if (photos) {
    const getPhotos = () => {
      const photosFragment = document.createDocumentFragment();
      const photosContainer = photos.cloneNode(false);

      for (let i = 0; i < offer.photos.length - 1; i++) {
        const newElement = noticeCardEl.querySelector('.popup__photo').cloneNode(false);
        newElement.src = offer.photos[i];
        photosFragment.appendChild(newElement);
      }

      photosContainer.append(photosFragment);
      return photosContainer;
    };

    noticeCardEl.replaceChild(getPhotos(), photos);
  } else {
    photos.classList.add('hidden');
  }

  if (features) {
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
      return featuresContainer;
    };

    noticeWindow.appendChild(noticeCardEl);

    noticeCardEl.replaceChild(getApartmentFeatures(), noticeCardEl.querySelector('.popup__features'));
  } else {
    noticeCardEl.querySelector('.popup__features').remove();
  }

  return noticeCardEl;
});

