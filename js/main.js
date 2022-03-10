const GET_RANDOM_NUMBER = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const GET_RANDOM_FLOAT_NUMBER = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (elements) => elements[GET_RANDOM_NUMBER(0, elements.length - 1)];

const getArray = (object) => {
  const maxLength = object.length;
  const lengthOfArray = GET_RANDOM_NUMBER(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfElement = GET_RANDOM_NUMBER(0, maxLength - 1);
    const element = object[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }

  return array;
};

const LEAD_ZERO = (num, size) => {
  let s = `${num  }`;
  while (s.length < size) {
    s = `0${  s}`;
  }
  return s;
};

const HOUSES_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES_LIST = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS_LIST = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const newObject = () => {
  const RANDOM_NUMBER = LEAD_ZERO(GET_RANDOM_NUMBER(1, 10), 2);
  const author = {
    avatar: `img/avatars/user${  RANDOM_NUMBER}.png`
  };

  const location = {
    lat: GET_RANDOM_FLOAT_NUMBER(35.65000, 35.70000, 5),
    lng: GET_RANDOM_FLOAT_NUMBER(139.70000, 139.80000, 5)
  };

  const offer = {
    title: 'Luxury apartment',
    address: `${location.lat  }, ${  location.lng}`,
    price: GET_RANDOM_NUMBER(0, 10000),
    type: getRandomArrayElement(HOUSES_TYPES),
    rooms: GET_RANDOM_NUMBER(0, 10),
    guests: GET_RANDOM_NUMBER(0, 20),
    checkin: getRandomArrayElement(CHECKIN_TIME),
    checkout: getRandomArrayElement(CHECKOUT_TIME),
    description: 'Unique Luxury Apartment',
    photos: getArray(PHOTOS_LIST),
    features: getArray(FEATURES_LIST)
  };


  return {
    author,
    offer,
    location
  };
};

const randomObjects = Array.from({length: 10}, newObject);

console.log(randomObjects);
