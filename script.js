// Busca o formulário pelo id "form" no HTML
// document representa toda a página HTML
// getElementById localiza um elemento específico pelo id
const form = document.getElementById("form");

// Busca o campo de nome
const nome = document.getElementById("nome");

// Busca o campo de email
const email = document.getElementById("email");

// Busca o campo de senha
const senha = document.getElementById("senha");

// Busca o campo de confirmação de senha
const confirmarSenha = document.getElementById("confirmarSenha");

// Adiciona um "ouvinte de evento" ao formulário
// Ele fica esperando o evento "submit" (quando o usuário clica em cadastrar)
form.addEventListener("submit", function (e) {
  // e representa o evento
  // preventDefault impede o comportamento padrão do formulário
  // (que seria recarregar a página)
  e.preventDefault();

  // Variável de controle
  // Começa como true (formulário válido)
  let valido = true;

  // ===================== VALIDAÇÃO DO NOME =====================

  // trim() remove espaços antes e depois do texto
  // Verifica se o campo está vazio
  if (nome.value.trim() === "") {
    // Se estiver errado, mostra mensagem de erro
    mostrarErro(nome, "Nome é obrigatório");
    // Marca o formulário como inválido
    valido = false;
  } else {
    // Se estiver correto, remove mensagem de erro
    limparErro(nome);
  }

  // ===================== VALIDAÇÃO DO EMAIL =====================

  // includes("@") verifica se o email contém "@"
  if (!email.value.includes("@")) {
    mostrarErro(email, "Email inválido");
    valido = false;
  } else {
    limparErro(email);
  }

  // ===================== VALIDAÇÃO DA SENHA =====================

  // length verifica a quantidade de caracteres digitados
  if (senha.value.length < 6) {
    mostrarErro(senha, "Mínimo 6 caracteres");
    valido = false;
  } else {
    limparErro(senha);
  }

  // ===================== CONFIRMAÇÃO DE SENHA =====================

  // Compara se a senha é diferente da confirmação
  if (senha.value !== confirmarSenha.value) {
    mostrarErro(confirmarSenha, "As senhas não conferem");
    valido = false;
  } else {
    limparErro(confirmarSenha);
  }

  // ===================== ENVIO FINAL =====================

  // Se nenhuma validação falhou
  if (valido) {
    // Exibe mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa todos os campos do formulário
    form.reset();
  }
});

// ===================== FUNÇÃO DE ERRO =====================

// Função reutilizável para mostrar erro em qualquer campo
function mostrarErro(input, mensagem) {
  // parentElement pega o elemento pai do input (div.campo)
  // querySelector("small") busca o small dentro desse pai
  const small = input.parentElement.querySelector("small");

  // Insere a mensagem de erro no small
  small.innerText = mensagem;

  // Adiciona a classe "erro" ao input (usada no CSS)
  input.classList.add("erro");
}

// ===================== FUNÇÃO DE SUCESSO =====================

// Função reutilizável para limpar erro de qualquer campo
function limparErro(input) {
  // Busca o small do campo
  const small = input.parentElement.querySelector("small");

  // Remove o texto de erro
  small.innerText = "";

  // Remove a classe de erro do input
  input.classList.remove("erro");
}

/* ================= DICIONÁRIO (INGLÊS → PORTUGUÊS) =================

const            → constante (valor que não muda)
document         → documento HTML (a página)
getElementById   → pegar elemento pelo id
form             → formulário
addEventListener → adicionar ouvinte de evento
submit           → envio do formulário
function         → função
event (e)        → evento
preventDefault   → prevenir comportamento padrão
let              → variável que pode mudar
true             → verdadeiro
false            → falso
value            → valor digitado no input
trim             → remover espaços extras
includes         → contém
length           → tamanho / quantidade
alert            → alerta
reset            → limpar formulário
parentElement    → elemento pai
querySelector    → selecionar elemento
innerText        → texto interno
classList        → lista de classes
add              → adicionar
remove           → remover
input            → campo de entrada
small            → texto auxiliar

==================================================== */
