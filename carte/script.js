function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    if (sectionId === 'agents') {
        fetch('agents.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du fichier.');
                }
                return response.text();
            })
            .then(data => {
                const agentsSection = document.getElementById('agents');
                agentsSection.innerHTML = data;
                agentsSection.style.display = 'block';
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }
}

// Afficher la section des opérateurs par défaut
showSection('operators');
