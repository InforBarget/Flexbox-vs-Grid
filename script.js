// Validation du mot de passe
document.getElementById('confirm-password').addEventListener('input', function () {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;

    if (password !== confirmPassword) {
        this.setCustomValidity('Les mots de passe ne correspondent pas');
    } else {
        this.setCustomValidity('');
    }
});

// Gestion de la soumission
document.querySelector('.complex-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulaire soumis avec succès ! (simulation)');
});
