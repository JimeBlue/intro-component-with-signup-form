// Get the form
const form = document.getElementById('form');
// Get the first Name input
const firstName = document.getElementById('first-name');
// Get the last Name input
const lastName = document.getElementById('last-name');
// Get the email input
const email = document.getElementById('email');
// Get the password input
const password = document.getElementById('password');

// Add event listener to the form submition

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Call custom made function that checks the inputs
  checkInputs();
});

//Create a function that checks the inputs

const checkInputs = () => {
  // get values from the inputs, using the trim function to remove all white space
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // TODO: erase the text in the html in each span with the error message

  // Validate first name
  if (firstNameValue === '') {
    //If the first name input is empty call the setErrorFor function and pass the input to which we want to set the error, in this casae firstName and also pass an error message
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    // if the first name input is not empty call the setSuccessFor function passing the firstName input
    setSuccessFor(firstName);
  }
};

const setErrorFor = (input, message) => {
  // Get the parent of the target input, i.e <div class="form__item">
  const formItem = input.parentElement;
  //   Get the <span> where the error message will be display
  const errorMessage = formItem.nextElementSibling; // This is the parent of the span tag
  const span = errorMessage.querySelector('span');
  //   Put the error message in the span
  span.innerText = message;

  // TODO: change .form__error-message to .error
  // Add the error class to the parent of the span tag
  // errorMessage.className = 'form__error-message';

  //Add the error class to the parent of error img, so that with css code the error img becomes visible
  formItem.className = 'form__item error';
};

function setSuccessFor(input) {
  // Get the parent of the target input, i.e <div class="form__item">
  const formItem = input.parentElement;
  const errorMessage = formItem.nextElementSibling;
  const span = errorMessage.querySelector('span');
  formItem.className = 'form__item success';
  span.innerText = '';
}
