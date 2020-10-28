
// this accesses the document object model (DOM) and binds it to the form variable in js
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show inputted error msg
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
};
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// check valid email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//check required fields
function checkRequired (arr) {
arr.forEach(function(input) {
if (input.value.trim() === '') {
  showError(input, `${input.id}is required!`)
} else {
  showSuccess(input);
}
});
}

// event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  checkRequired([username, email, password, password2])
})

// event Listeners
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   if (username.value === '') {
//     showError(username, 'Username is required')
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === '') {
//     showError(email, 'Email is required')
//   } else if (!isValidEmail(email.value)) {
//     showError(email, 'is not a valid email.')
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === '') {
//     showError(password, 'Password is required')
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === '') {
//     showError(password2, 'Password doesn\'t match!')
//   } else {
//     showSuccess(password2);
//   }
// });
