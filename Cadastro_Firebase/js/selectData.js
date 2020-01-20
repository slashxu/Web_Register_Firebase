//Referencia do banco de dados
var refCadastro = firebase.database().ref("CadastroUser");

var btnSair = document.getElementById('btnSair');

console.log("teste");

function selectData(idTabela) {

  var nome;
  var empresa;
  var email;
  var telefone;

  // Irá percorrer a tabela para buscar as informações
  refCadastro.on("child_added", snap => {

    // pega o valor do banco de dados
    nome = snap.child("nome").val();
    empresa = snap.child("empresa").val();
    email = snap.child("email").val();
    telefone = snap.child("telefone").val();

    var newRow = document.createElement('tr');
    newRow.insertCell(0).innerHTML = nome;
    newRow.insertCell(1).innerHTML = empresa;
    newRow.insertCell(2).innerHTML = email;
    newRow.insertCell(3).innerHTML = telefone;
    document.getElementById(idTabela).appendChild(newRow);
    return false;

  });

};

btnSair.addEventListener('click', function () {

      window.location.replace('index.html');

  }).catch(function (error) {
      console.log("Failure!")
  });

