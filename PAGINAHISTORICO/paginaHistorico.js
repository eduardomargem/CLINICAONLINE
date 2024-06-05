document.getElementById('generatePrescription').addEventListener('click', function() {
    // Simula a geração de uma receita
    alert('Receita gerada com sucesso!');
});

document.getElementById('sendPrescription').addEventListener('click', function() {
    // Simula o envio da receita para uma farmácia credenciada
    alert('Receita enviada para a farmácia credenciada!');
});

document.getElementById('integrateEHR').addEventListener('click', function() {
    // Simula a integração com o EHR (Prontuário Eletrônico de Saúde)
    alert('Receita integrada ao EHR com sucesso!');
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = () => {
        return localStorage.getItem('loggedIn') === 'true';
    };

    const setUserLoggedIn = (loggedIn) => {
        localStorage.setItem('loggedIn', loggedIn ? 'true' : 'false');
        updateNavbar();
    };

    const getUserName = () => {
        return "Usuário";
    };

    const getUserPhoto = () => {
        return "/assets/feedbackperfil.jpg";
    };

    const updateNavbar = () => {
        if (isLoggedIn()) {
            document.getElementById('user-name').textContent = getUserName();
            document.getElementById('user-photo').src = getUserPhoto();
            document.getElementById('user-info').style.display = 'flex';
            document.getElementById('login-option').style.display = 'none';
        } else {
            document.getElementById('user-info').style.display = 'none';
            document.getElementById('login-option').style.display = 'flex';
        }
    };

    document.getElementById('logout-button').addEventListener('click', function() {
        alert('Logout realizado com sucesso!');
        setUserLoggedIn(false);
        window.location.href = "/PAGINAINICIAL/paginaInicial.html"; 
    });

    document.getElementById('login-button').addEventListener('click', function() {
        alert('Redirecionando para a página de login...');
        setUserLoggedIn(true);
    });

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    updateNavbar();
});
