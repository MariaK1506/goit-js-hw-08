import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submitBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInputChange);
refs.textarea.addEventListener('input', onInputChange);

let message;

function onInputChange(event) {
  //   event.preventDefault();
  //   const email = event.target.value;
  const email = refs.input.value;
  //   const message = event.target.value;
  message = refs.textarea.value;
  const formData = { email, message };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  //
  //   console.log(refs.input.value);
  //   console.log(refs.textarea.value);
}

function onFormSubmit(event) {
  event.preventDefault();
  //   localStorage.clear();
  event.currentTarget.reset();
}

function populateFormData() {
  const savedStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedStorage) {
    console.log(savedStorage);
    message = savedStorage;
  }
}
