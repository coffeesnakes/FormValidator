
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
function showSuccess (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
// event Listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required')
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Password doesn\'t match!')
  } else {
    showSuccess(password2);
  }
})

function Authenticate() {

}