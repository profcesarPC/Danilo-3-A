window.onload = function () {
  const nomeUsuario = document.getElementById('nomeUsuario');
  const saudacao = document.getElementById('saudacao');
  const conteudo = document.getElementById('conteudo-principal');

  // Solicita o nome antes de exibir o conteúdo
  let nome = prompt("Olá! Qual é o seu nome?");
  if (!nome || nome.trim() === "") {
    nome = "Visitante";
  }

  nomeUsuario.textContent = `Olá, ${nome}!`;
  nomeUsuario.style.color = gerarCorAleatoria();

  // Saudação com base na hora
  const hora = new Date().getHours();
  let mensagem = "";

  if (hora < 12) {
    mensagem = "Bom dia! Seja bem-vindo(a) ao projeto Agrinho 2025.";
  } else if (hora < 18) {
    mensagem = "Boa tarde! Explore nosso projeto Agrinho 2025.";
  } else {
    mensagem = "Boa noite! Obrigado por visitar a nossa página do Agrinho.";
  }

  saudacao.textContent = mensagem;

  // Agora sim exibe o conteúdo
  conteudo.style.display = "block";

  function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 156 + 100);
    const g = Math.floor(Math.random() * 156 + 100);
    const b = Math.floor(Math.random() * 156 + 100);
    return `rgb(${r}, ${g}, ${b})`;
  }
};
