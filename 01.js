// Exercício 1 – Sistema de Login
// Crie um objeto usuario com:
// login
// senha
// tipo
// Depois, exiba a mensagem:
// O login do administrador é admin e a senha é 1234, muito fraca por sinal.

usuario = {
    login: "analu",
    senha: "1234",
    tipo: "chefe"
};

console.log(`O login do ${usuario.tipo} é ${usuario.login} e a senha é ${usuario.senha}, muito fraca por sinal`);