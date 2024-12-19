const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const togglePasswordBtn = document.querySelector("#togglePassword");
const jobSelectInput = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

togglePasswordBtn.addEventListener("click", () => {
    // Alterna o tipo do campo de senha
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    // Muda o texto do botão conforme a visibilidade
    togglePasswordBtn.textContent = type === "password" ? "Mostrar" : "Ocultar";
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    //Verifica se o e-mail está preenchio e se é valido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // Verifica se a senha está preenchida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 dígitos.");
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelectInput.value === "") {
        alert("Por favor, seleione a sua situação");
        return;
    }

    // Verifica se a mensagem está preenchida
    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma mensagem");
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        // usario12@host.com..br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha 
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // Senha Válida
        return true
    }

    // Senha inválida
    return false
}