document.addEventListener('DOMContentLoaded', function() {
    const consultas = document.querySelectorAll('.lista-consultas ul li');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('close-button');
    const diagnosticosList = document.getElementById('diagnosticos-list');
    const tratamentosList = document.getElementById('tratamentos-list');

    const dadosConsultas = {
        'clinica-geral': {
            diagnosticos: ['Hipertensão', 'Diabetes'],
            tratamentos: ['Dieta', 'Exercícios físicos', 'Medicação']
        },
        'cardiologia': {
            diagnosticos: ['Arritmia', 'Cardiomiopatia'],
            tratamentos: ['ECG', 'Holter', 'MAPA', 'Radiografia do tórax']
        },
        'oftalmologia': {
            diagnosticos: ['Catarata', 'Glaucoma'],
            tratamentos: ['Cirurgia', 'Colírios']
        },
        'ginecologia': {
            diagnosticos: ['Endometriose', 'Miomas'],
            tratamentos: ['Cirurgia', 'Terapia hormonal']
        },
        'neurologia': {
            diagnosticos: ['Enxaqueca', 'Epilepsia'],
            tratamentos: ['Medicação', 'Terapia']
        },
        'nutricionista': {
            diagnosticos: ['Obesidade', 'Desnutrição'],
            tratamentos: ['Plano alimentar', 'Suplementação']
        }
    };

    consultas.forEach(consulta => {
        consulta.addEventListener('click', function() {
            const consultaTipo = this.getAttribute('data-consulta');
            const dados = dadosConsultas[consultaTipo];

            diagnosticosList.innerHTML = '';
            tratamentosList.innerHTML = '';

            dados.diagnosticos.forEach(diagnostico => {
                const li = document.createElement('li');
                li.textContent = diagnostico;
                diagnosticosList.appendChild(li);
            });

            dados.tratamentos.forEach(tratamento => {
                const li = document.createElement('li');
                li.textContent = tratamento;
                tratamentosList.appendChild(li);
            });

            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
