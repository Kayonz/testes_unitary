function salvarSenha() {
  var senha = document.getElementById("password").value;

  var possuiLetrasMaiusculas = /[A-Z]/.test(senha);
  var possuiLetrasMinusculas = /[a-z]/.test(senha);
  var possuiCaracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha);
  var possuiNumeros = /[0-9]/.test(senha);
  var possuiMinimo8Caracteres = senha.length >= 8;

  if (
    possuiLetrasMaiusculas &&
    possuiLetrasMinusculas &&
    possuiCaracteresEspeciais &&
    possuiNumeros &&
    possuiMinimo8Caracteres
  ) {
    alert("Registrado");
    window.location.href = "index.html";
  } else {
    alert("A senha não atende aos requisitos.");
  }
}

function validarSenha() {
  var senha = document.getElementById("password").value;
  const senhaValida = validarSenha2(senha);

  if (senhaValida) {
    window.location.href = "index.html";
  } else {
    alert("A senha não atende aos requisitos.");
  }
}
function validarSenha2(senha) {
  var possuiLetrasMaiusculas = /[A-Z]/.test(senha);
  var possuiLetrasMinusculas = /[a-z]/.test(senha);
  var possuiCaracteresEspeciais = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(senha);
  var possuiNumeros = /[0-9]/.test(senha);
  var possuiMinimo8Caracteres = senha.length >= 8;

  return possuiLetrasMaiusculas &&
    possuiLetrasMinusculas &&
    possuiCaracteresEspeciais &&
    possuiNumeros &&
    possuiMinimo8Caracteres

}

module.exports = { validarSenha2 }
