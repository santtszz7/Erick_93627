function consultarCnpj() { 
    const cnpj = document.getElementById('cnpj').value.replace(/\D/g, '');

    if (cnpj.length !== 14) {
        alert("Por favor, insira um CNPJ válido com 14 dígitos numéricos.");
        return;
    }

    const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Verifica se houve erro na consulta
            if (data.message) {
                alert("CNPJ não encontrado.");
                return;
            }

            // Atualiza os campos no formulário com os dados retornados pela API
            document.getElementById('nome').textContent = data.razao_social || "Não informado";
            document.getElementById('fantasia').textContent = data.nome_fantasia || "Não informado";
            document.getElementById('situacao').textContent = data.descricao_situacao_cadastral || "Não informado";
            document.getElementById('logradouro').textContent = data.logradouro || "Não informado";
            document.getElementById('numero').textContent = data.numero || "Não informado";
            document.getElementById('bairro').textContent = data.bairro || "Não informado";
            document.getElementById('municipio').textContent = data.municipio || "Não informado";
            document.getElementById('uf').textContent = data.uf || "Não informado";
            document.getElementById('cep').textContent = data.cep || "Não informado";
        })
        .catch(error => {
            console.error("Erro ao consultar o CNPJ:", error);
            alert("Ocorreu um erro ao consultar o CNPJ. Tente novamente mais tarde.");
        });
}
