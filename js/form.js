
const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const adRoomQty = adForm.querySelector('#room_number');
const adCapacity = adForm.querySelector('#capacity');
const adSubmitButton = adForm.querySelector('.ad-form__submit');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const validateTitle = (value) => value.length >=30 && value.length <=100;

//Title validation

pristine.addValidator(
  adTitle, validateTitle, 'От 30 до 100 символов'
);

//Price validation

const validatePrice = (value) => parseInt(value, 10) >= 0 && parseInt(value, 10) <= 100000;
pristine.addValidator(adPrice, validatePrice, 'От 0 до 100 000');

//Rooms/guests qty validation

const settleOptions = {
  '1'   : ['1'],
  '2'   : ['1', '2'],
  '3'   : ['1', '2', '3'],
  '100' : ['0']
};

function validateSettle () {
  return settleOptions[adRoomQty.value].includes(adCapacity.value);
}

const getSettleErrorMessage = () => 'Выбранная опция заселения недосупна';

pristine.addValidator(adRoomQty, validateSettle, getSettleErrorMessage);
pristine.addValidator(adCapacity, validateSettle, getSettleErrorMessage);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    adForm.submit();
  }
});

// export {setUserFormSubmit};
