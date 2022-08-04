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

  // Validate first name
  if (firstNameValue === '') {
    //If the first name input is empty call the setErrorFor function and pass the input to which we want to set the error, in this casae firstName and also pass an error message
    setErrorFor(firstName, 'First Name cannot be empty');
  } else {
    // if the first name input is not empty call the setSuccessFor function passing only the firstName input without any message
    setSuccessFor(firstName);
  }

  // Validate last name
  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty');
  } else {
    setSuccessFor(lastName);
  }

  // Validate email
  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not a valid email');
  } else {
    setSuccessFor(email);
  }

  //Validate password

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }
};

// Create function to handle the error
const setErrorFor = (input, message) => {
  // Get the parent of the target input, i.e .form__item>
  const formItem = input.parentElement;
  //   Get the <small> where the error message will be display
  const small = formItem.querySelector('small');
  //   Show the error message
  small.innerText = message;
  // Add class error to parent of error icon. The class error in the css will show the icon
  formItem.className = 'form__item error';
};

// Create function to show there is no error
const setSuccessFor = (input) => {
  // Get the parent of the target input, i.e .form__item
  const formItem = input.parentElement;
  // Add class sucess to parent of error icon. The class success in the css will hide the icon
  formItem.className = 'form__item success';
};

//Create a function with regex to check if email is valid
const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
