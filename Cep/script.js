// Função que será chamada ao clicar no botão
function consultarCep(){ 
    // Obtém o valor do campo CEP
    const cep = document.getElementById('cep').value;
// Verifica se o CEP tem 8 digitos
    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido com 8 dígitos.")
        return; // Interrompe a execuçaõ da função se o CEP for inválido
    }

// URL da API de CEP (usando o serviço ViaCEp como exemplo)
const url = `https://viacep.com.br/ws/${cep}//json`;

// Faz a requisição a API para obter os dados do CEP
fetch(url)
    .then(response => response.json()) // Converte a resposta em JSON
    .then(data => {
        //Verifica se o CEP foi encntrado
        if (data.erro) {
            alert("CEP não encontrado");
            return; // Interrompe a execução se o CEP não for válido
        }
        // Atualiza os campos no formulário com os dados retornados pela API
        document.getElementById('rua').textContent = data.logradouro;
        document.getElementById('bairro').textContent = data.bairro;
        document.getElementById('cidade').textContent = data.localidade;
        document.getElementById('estado').textContent = data.uf;
    })
    .catch(error => {
        console.error("Erro ao consultar o CEP:", error); // Loga os erros no console
        alert("Ocorreu um erro ao consultar o CEP")
    });
}