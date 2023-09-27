function directionLogin() {
  var email = document.getElementById("name").value;
  var senha = document.getElementById("password").value;

  if (validarLogin(email, senha)) {
    window.location.href = "logado.html";
  } else {
    alert("Email ou senha incorretos.")
    document.getElementById("errado").innerHTML = "Email ou senha incorretos.";
  }
}

function validarLogin(email, senha) {
  return email === "vitor@hotmail.com" && senha === "2905De@!"
}

module.exports = { validarLogin }