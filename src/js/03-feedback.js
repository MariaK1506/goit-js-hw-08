import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submitBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataChange, 500));

function onFormDataChange() {
  const email = refs.input.value;
  const message = refs.textarea.value;
  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

populateFormData();

function populateFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  }
}
