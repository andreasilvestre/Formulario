// Exemplo 1
function exibirAlerta() {
    alert('O formulário preenchido foi enviado para o final desta página!');
} 
document.querySelector('#Salvar').onclick = exibirAlerta;




document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('TabelaDeDados').classList.remove('d-none');
    envioTabela();
});

const termosAceiteElement = document.getElementById('Aceite')

termosAceiteElement.addEventListener('scroll', () => {
    if (termosAceiteElement.offsetHeight + termosAceiteElement.scrollTop >= termosAceiteElement.scrollHeight) {
        document.getElementById("i-aceite").disabled = false;
    }
})

document.getElementById('Nome').addEventListener('keyup', gerarLogin);
document.getElementById('Sobrenome').addEventListener('keyup', gerarLogin);

function gerarLogin() {
    const nome = document.getElementById('Nome').value;
    const sobrenome = document.getElementById('Sobrenome').value;
    const login = nome + '.' + sobrenome;
    document.getElementById('Login').value = login.toLowerCase();
}

function pesquisacep() {
    var cep = document.getElementById('CEP').value.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            const url = 'https://viacep.com.br/ws/' + cep + '/json/';
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (json.logradouro) {
                        document.getElementById('Endereco').value = json.logradouro;
                        document.getElementById('Bairro').value = json.bairro;
                        document.getElementById('Cidade').value = json.localidade;
                        document.getElementById('Estado').value = json.uf;
                        document.getElementById('Complemento').value = json.complemento;
                    } else {
                        alert("CEP NÃO ENCONTRADO")
                    }
                })
        } else {
            alert("CEP INVÁLIDO")
        }
    }
}

function envioTabela() {
    //Copiando os valores para a tabela
    document.getElementById('TNome').innerHTML = document.getElementById('Nome').value;
    document.getElementById('TSobrenome').innerHTML = document.getElementById('Sobrenome').value;
    document.getElementById('TEmail').innerHTML = document.getElementById('Email').value;
    document.getElementById('RLogin').innerHTML = document.getElementById('Login').value;
    document.getElementById('TSenha').innerHTML = document.getElementById('Senha').value;
    document.getElementById('TCEP').innerHTML = document.getElementById('CEP').value;
    document.getElementById('TEndereco').innerHTML = document.getElementById('Endereco').value;
    document.getElementById('TComplemento').innerHTML = document.getElementById('Complemento').value;
    document.getElementById('TBairro').innerHTML = document.getElementById('Bairro').value;
    document.getElementById('TCidade').innerHTML = document.getElementById('Cidade').value;
    document.getElementById('TEstado').innerHTML = document.getElementById('Estado').value;
    document.getElementById('TGithub').innerHTML = document.getElementById('GitHub').value;
    var iAcademia = document.getElementById("Academia");
    document.getElementById('TAcademia').innerHTML = iAcademia.options[iAcademia.selectedIndex].text;
    var iProfessor = document.getElementById("Professor");
    document.getElementById('TProfessor').innerHTML = iProfessor.options[iProfessor.selectedIndex].text;
    document.getElementById('TTermosLegais').innerHTML = document.getElementById('TermosLegais').value == "on" ? 'Sim' : 'Não'
    document.getElementById('TSimOuNao').innerHTML = document.querySelector('input[name=info]:checked') == "on" ? 'Sim' : 'Não'
};