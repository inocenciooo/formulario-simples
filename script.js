const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  usernameCheck();
  emailCheck();
  passwordCheck();
  passwordConfirmationCheck();
});

function usernameCheck() {
  if (username.value === "") {
    error(username, "O nome de usuário é obrigatório.");
  } else {
    username.parentElement.className = "form-content";
  }
  filled(username);
}

function emailCheck() {
  if (email.value === "") {
    error(email, "É necessário informar um e-mail.");
  } else {
    email.parentElement.className = "form-content";
  }
  filled(email);
}

function passwordCheck() {
  if (password.value === "") {
    error(password, "Informe uma senha para continuar.");
  } else if (password.value.length < 8) {
    error(password, "Use pelo menos 8 caracteres.");
  } else {
    password.parentElement.className = "form-content";
  }
  filled(password);
}

function passwordConfirmationCheck() {
  if (passwordConfirmation.value === "") {
    error(passwordConfirmation, "Confirme sua senha.");
  } else if (passwordConfirmation.value !== password.value) {
    error(passwordConfirmation, "As senhas não coincidem.");
  } else {
    passwordConfirmation.parentElement.className = "form-content";
  }
  filled(passwordConfirmation);
}

function error(input, message) {
  const localMensagem = input.parentElement.querySelector("a");

  input.parentElement.className = "form-content error";
  localMensagem.innerText = message;
}

function filled(input) {
  input.addEventListener("blur", () => {
    input.parentElement.className = "form-content";
  });
}
