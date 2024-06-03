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
