const form = document.getElementById('form-contato');
const nomescontatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomescontatos.includes(inputNomeContato.value)){
        alert(`A contato ${inputNomeContato.value} já foi inserida`);
    }else{
        nomescontatos.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;

    }



    inputNomeContato.value = '';
    inputNumeroContato.value = '';
};

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};

function atualizaTotal(){
    const totalContatos = nomescontatos.length;

    document.getElementById('total-contatos').innerHTML = totalContatos
}