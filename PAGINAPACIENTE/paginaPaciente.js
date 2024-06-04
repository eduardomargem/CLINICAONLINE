document.addEventListener('DOMContentLoaded', function() {
    const consultas = document.querySelectorAll('.lista-consultas ul li');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    const diagnosticosList = document.getElementById('diagnosticos-list');
    const tratamentosList = document.getElementById('tratamentos-list');

    const consultaDados = {
        "clinica-geral": {
            diagnosticos: ["Resfriado comum", "Gripe"],
            tratamentos: ["Repouso", "Hidratação", "Paracetamol"]
        },
        "cardiologia": {
            diagnosticos: ["Arritmia", "Cardiomiopatia"],
            tratamentos: ["ECG", "Medicação", "Cirurgia"]
        },
        "oftalmologia": {
            diagnosticos: ["Miopia", "Catarata"],
            tratamentos: ["Óculos", "Cirurgia a laser"]
        },
        "ginecologia": {
            diagnosticos: ["Endometriose", "Cistos Ovarianos"],
            tratamentos: ["Medicação", "Cirurgia"]
        },
        "neurologia": {
            diagnosticos: ["Enxaqueca", "Epilepsia"],
            tratamentos: ["Medicação", "Terapia"]
        },
        "nutricionista": {
            diagnosticos: ["Deficiência de vitaminas", "Obesidade"],
            tratamentos: ["Suplementação", "Dieta balanceada"]
        }
    };

    consultas.forEach(consulta => {
        consulta.addEventListener('click', function() {
            const consultaTipo = this.getAttribute('data-consulta');
            const dados = consultaDados[consultaTipo];

            // Limpa listas de diagnósticos e tratamentos
            diagnosticosList.innerHTML = '';
            tratamentosList.innerHTML = '';

            // Adiciona novos diagnósticos
            dados.diagnosticos.forEach(diagnostico => {
                const li = document.createElement('li');
                li.textContent = diagnostico;
                diagnosticosList.appendChild(li);
            });

            // Adiciona novos tratamentos
            dados.tratamentos.forEach(tratamento => {
                const li = document.createElement('li');
                li.textContent = tratamento;
                tratamentosList.appendChild(li);
            });

            // Abre o modal
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


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
