import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  submitBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataChange, 500));

function onFormDataChange(event) {
  const email = refs.input.value;
  const message = refs.textarea.value;
  const formData = { email, message };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}

populateFormData();

function populateFormData() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  }
}
