const GET_RANDOM_NUMBER = (min, max) =>
  Number.isInteger(min & max) && min >= 0 && min < max ? Math.floor(Math.random() * (max - min + 1) + min) : 'Введите корректный диапозон от 0 и выше';

GET_RANDOM_NUMBER(-70, 50);

const GET_RANDOM_FLOAT_NUMBER = (min, max, float) => {
  const result = (Number.isInteger(min & max) && min >= 0 && min < max) ? Math.random() * (max - min + 1) + min : 'Введите корректный диапозон от 0 и выше';
  return result.toFixed(float);
};

GET_RANDOM_FLOAT_NUMBER(20.3, 80.6, 40);


