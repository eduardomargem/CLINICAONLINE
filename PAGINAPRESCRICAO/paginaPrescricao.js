
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
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prescriptionForm');
    const medication = document.getElementById('medication');
    const dosage = document.getElementById('dosage');
    const period = document.getElementById('period');
    const observations = document.getElementById('observations');
    const pharmacy = document.getElementById('pharmacy');
    
    const generatePrescriptionButton = document.getElementById('generatePrescription');
    const sendPrescriptionButton = document.getElementById('sendPrescription');
    const integrateEHRButton = document.getElementById('integrateEHR');
    
    // Função para validar os campos
    function validateFields() {
        if (!medication.value) {
            alert('Por favor, selecione um medicamento.');
            return false;
        }
        if (!dosage.value) {
            alert('Por favor, selecione a dosagem.');
            return false;
        }
        if (!period.value) {
            alert('Por favor, insira o período.');
            return false;
        }
        return true;
    }
    
    // Evento de clique para gerar receita
    generatePrescriptionButton.addEventListener('click', function() {
        if (validateFields()) {
            alert('Receita gerada com sucesso!');
            // Adicionar a lógica para gerar a receita aqui
        }
    });

    // Evento de clique para enviar receita
    sendPrescriptionButton.addEventListener('click', function() {
        if (validateFields() && pharmacy.value) {
            alert('Receita enviada com sucesso!');
            // Adicionar a lógica para enviar a receita aqui
        } else if (!pharmacy.value) {
            alert('Por favor, selecione uma farmácia credenciada.');
        }
    });

    // Evento de clique para integrar ao EHR
    integrateEHRButton.addEventListener('click', function() {
        if (validateFields()) {
            alert('Receita integrada ao EHR com sucesso!');
            // Adicionar a lógica para integrar ao EHR aqui
        }
    });
});