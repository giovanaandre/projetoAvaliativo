/*##############
Inicio: Função de verificação dos campos do formulário
*/
function {
var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var dtnasc = document.getElementById('datadenascimento').value;
var fone = document.getElementById('fone').value;
var cpf = document.getElementById('cpf').value;
var senha = document.getElementById('senha').value;
var PJ = document.getElementById('pessoajuridica').value;
var PF = document.getElementById('pessoafisica').value;
var genero = document.getElementById('genero').value;


//|| !email || !dtnasc || !fone || !cpf || !senha || !PF || !PJ || !genero
if(!nome){
	alert("Campos não preenchidos, favor preenche-los");
} else{
	alert("Campos preenchidos com sucesso");
}
}
/*##############
Final: Função de verificação dos campos do formulário