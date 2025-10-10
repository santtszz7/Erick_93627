function validateForm() {
    // Obtém os valores dos campos de input pelo ID
    let name = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Obtém o elemento para exibir a mensagem de erro
    let errorMessage = document.getElementById('error-message');

    // Limpa qualquer mensagem de erro anterior
    errorMessage.textContent = '';

    // Verifica se o campo "Nome" está vazio
    if (name === '') {
        errorMessage.textContent = 'Por favor, insira seu nome.';
        return false;
    }

    // Verifica se o campo "E-mail" está vazio
    if (email === '') {
        errorMessage.textContent = 'Por favor, insira seu e-mail.';
        return false;
    }

    // Verifica se o campo "Senha" está vazio
    if (password === '') {
        errorMessage.textContent = 'Por favor, insira sua senha.';
        return false;
    }

    // Verifica se o campo "Confirmar Senha" está vazio
    if (confirmPassword === '') {
        errorMessage.textContent = 'Por favor, confirme sua senha.';
        return false;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return false;
    }

    // Se todas as verificações forem bem-sucedidas
    alert('Formulário enviado com sucesso!');
    return true; // Permite o envio do formulário
}
