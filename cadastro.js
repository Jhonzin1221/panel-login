function checkRegistration() {
    // Obter os valores dos campos de senha
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    // Verificar se as senhas correspondem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return false; // Impede o envio do formulário
    }

    // Verificar a força da senha (exemplo básico)
    if (password.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    // Simular o envio bem-sucedido e redirecionar para a página de login
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
    return false;
}
