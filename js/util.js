const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const GetRandomFloatNumber = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getArray = (object) => {
  const maxLength = object.length;
  const lengthOfArray = getRandomNumber(1, maxLength);
  const array = [];

  while (array.length < lengthOfArray) {
    const indexOfElement = getRandomNumber(0, maxLength - 1);
    const element = object[indexOfElement];

    if (!array.includes(element)) {
      array.push(element);
    }
  }

  return array;
};

const LeadZero = (num, size) => {
  let s = `${num  }`;
  while (s.length < size) {
    s = `0${  s}`;
  }
  return s;
};

export {getRandomNumber, GetRandomFloatNumber, LeadZero, getRandomArrayElement, getArray};
