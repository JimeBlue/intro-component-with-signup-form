const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Validate first name
  if (firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty');
    firstName.placeholder = '';
  } else {
    setSuccessFor(firstName);
  }

  // Validate last name
  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
    lastName.placeholder = '';
  } else {
    setSuccessFor(lastName);
  }

  // Validate email
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
    email.placeholder = 'email@example/com';
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not a valid email');
  } else {
    setSuccessFor(email);
  }

  //Validate password

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
    password.placeholder = '';
  } else {
    setSuccessFor(password);
  }
};

const setErrorFor = (input, message) => {
  const formItem = input.parentElement;
  const small = formItem.querySelector('small');
  small.innerText = message;
  formItem.className = 'form__item error';
};

const setSuccessFor = (input) => {
  const formItem = input.parentElement;
  formItem.className = 'form__item success';
};

//Create a function with regex to check if email is valid
const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
