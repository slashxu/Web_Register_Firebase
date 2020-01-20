
// Foratação mascara Telefone
function Mascara(objeto){
  if(objeto.value.length == 0)
    objeto.value = '(' + objeto.value;

  if(objeto.value.length == 3)
     objeto.value = objeto.value + ')';

if(objeto.value.length == 9)
    objeto.value = objeto.value + '-';
};

btnRegister.addEventListener('click', function () {

  //Referencia do banco de dados
  var refCadastro = firebase.database().ref("CadastroUser");

  //Pegando os valores digitados nos campos de texto e atribuindo a variáveis.
  var btnRegister = document.getElementById('btnRegister');
  var name = document.getElementById('name').value;
  var company = document.getElementById('company').value;
  var inputEmail = document.getElementById('inputEmail').value;
  var inputPassword = document.getElementById('inputPassword').value;
  var phone = document.getElementById('phone').value;

  firebase.auth().createUserWithEmailAndPassword(document.getElementById('inputEmail').value, document.getElementById('inputPassword').value).then(function (result) {
    
    var cad = refCadastro.push({
      nome: name,
      empresa: company,
      email: inputEmail,
      telefone: phone
    });

      console.log("Success!");
      //alert("Cadastrado com sucesso!");
      window.location.replace('initial-page.html');      
    
    }).catch(function (error) {
        alert("Falha ao cadastrar");
        console.log("Failure!")
    });
});

