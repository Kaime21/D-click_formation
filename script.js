const projets = [
    {
        titre: "Mon Portfolio",
        description: "Un site qui met en exergue mes compétences en Dev Web",
        technologies: ["HTML", "CSS", "Javascript"],
        lien: "index.html"
    },
    {
        titre: "Horloge",
        description: "Une horloge en temps réel avec JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "horloge.html"
    },
    {
        titre: "Calculateur de Prêt Hypothécaire",
        description: "Un programme qui definie en fonction du prêt, le taux annuel et la durée; le paiement mensuel.",
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "calculateur.html"
    }
];

const competences = [
    {
        nom: "HTML",
        niveau: "80%"
    },
    {
        nom: "CSS",
        niveau: "60%"
    },
    {
        nom: "JavaScript",
        niveau: "50%"
    },
    {
        nom: "Git",
        niveau: "40%"
    }
];

function afficherProjets() {
    const container = document.querySelector('.projets-container');
   
    if (container) {
        projets.forEach(projet => {
            const projetElement = document.createElement('div');
            projetElement.className = 'projet';
           
            let technologiesHTML = '';
            projet.technologies.forEach(tech => {
                technologiesHTML += `<span class="technologie">${tech}</span> `;
            });
           
            projetElement.innerHTML = `
                <h3>${projet.titre}</h3>
                <p>${projet.description}</p>
                <div class="technologies">${technologiesHTML}</div>
                <a href="${projet.lien}" class="lien-projet">Voir le projet</a>
            `;
           
            container.appendChild(projetElement);
        });
    }
}

function afficherCompetences() {
    const container = document.querySelector('.competences-container');
   
    if (container) {
        competences.forEach(competence => {
            const competenceElement = document.createElement('div');
            competenceElement.className = 'competence';
           
            competenceElement.innerHTML = `
                <h3>${competence.nom}</h3>
                <div class="barre-niveau">
                    <div class="niveau" style="width: ${competence.niveau}"></div>
                </div>
                <span class="pourcentage">${competence.niveau}</span>
            `;
           
            container.appendChild(competenceElement);
        });
    }
}

function gererFormulaire() {
    const formulaire = document.querySelector('form');
   
    if (formulaire) {
        formulaire.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci pour votre message! Je vous répondrai dès que possible.');
            formulaire.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    afficherProjets();
    afficherCompetences();
    gererFormulaire();
});