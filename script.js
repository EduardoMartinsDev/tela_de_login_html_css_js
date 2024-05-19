document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let valid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        emailError.style.display = 'block';
        valid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Login bem-sucedido!');
        // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
