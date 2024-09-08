function checkLogin() {
    // Captura o valor do campo de input com id "name" (nome de usuário)
    var username = document.getElementById("name").value;
    // Captura o valor do campo de input com id "password" (senha)
    var password = document.getElementById("password").value;

    // Verifica se o nome de usuário e senha correspondem ao administrador
    if (username === "Lopes da silva" && password === "admin") {
        alert("Seja bem-vindo administrador"); // Exibe um alerta de boas-vindas para o administrador
        window.location.href = "home.html"; // Redireciona para a página do painel administrativo
        return false; // Impede o envio do formulário após o redirecionamento
    }

    // Verifica se o nome de usuário e senha correspondem a um usuário comum
    else if (username === "Jhon" && password === "usuario1221") {
        alert("Seja Bem-vindo usuário"); // Exibe um alerta de boas-vindas para o usuário
        window.location.href = "home.html"; // Redireciona para a página home do site
        return false; // Impede o envio do formulário após o redirecionamento
    }

    // Se o nome de usuário ou a senha estiverem incorretos
    else {
        alert("Usuário ou senha incorretos!"); // Exibe um alerta de erro
        return false; // Impede o envio do formulário, mantendo o usuário na página atual
    }
}