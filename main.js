const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emmoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();

  adicionarLinha();
  atualizaTabela();
  atualizaMedia();
});

function adicionarLinha () {
  const campoAtividade = document.getElementById("nome-atividade");
  const campoNota = document.getElementById("nota-atividade");

  const atividade = campoAtividade.value;
  const nota = campoNota.value;

  if (atividades.includes(atividade)) {
    alert (`A atividade ${atividade} já foi adicionada anteriormente`)
  } else {
    atividades.push(atividade);
    notas.push(parseFloat(nota));

    let linha = '<tr>';
    linha += `<td>${atividade}</td>`;
    linha += `<td>${nota}</td>`;
    linha += `<td>${nota >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
  }

  campoAtividade.value = "";
  campoNota.value = "";
}

function atualizaTabela () {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMedia () {
  const media = calculaMedia();

  document.getElementById('mediaValor').innerHTML = media.toFixed(2);
  document.getElementById('mediaResultado').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;

function calculaMedia () {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}}
