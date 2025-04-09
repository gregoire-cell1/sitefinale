/* =========================
   Navigation et changement de page
============================ */
const navLinks = document.querySelectorAll('.nav-link, .btn-main');
const sections = document.querySelectorAll('.page-section');

function switchPage(pageId) {
  // Affiche la section ciblée et masque les autres
  sections.forEach(section => {
    if (section.id === pageId) {
      section.classList.add('active-section');
      
      // Si la page Formations est activée, afficher toutes les formations
      if (pageId === "formations") {
        renderCards();  // Affiche toutes les formations
      }
    } else {
      section.classList.remove('active-section');
    }
  });
  
  // Met à jour les liens actifs dans la navigation
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetPage = link.getAttribute('data-page');
    if (targetPage) {
      switchPage(targetPage);
      document.getElementById(targetPage).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* =========================
   Données et affichage des formations
============================ */
const formations = [
  {
    nom: "BUT Informatique",
    etablissement: "IUT de Paris - Rives de Seine",
    ville: "Paris",
    transport: "Métro 6 - Quai de la Gare",
    duree: "3 ans",
    diplome: "BUT",
    debouches: "Développeur, Data Analyst, poursuite en Master",
    cout: "170€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Algorithmique",
      "Mardi : Base de données",
      "Mercredi : Développement Web",
      "Jeudi : Projet tutoré",
      "Vendredi : Anglais"
    ],
    satisfaction: 4.5,
    description: "Vie étudiante riche, nombreux projets collectifs et stages réguliers.",
    etudiants: ["Emma, 20 ans", "Lucas, 21 ans", "Sarah, 19 ans"]
  },
  {
    nom: "Licence Psychologie",
    etablissement: "Université Lyon 2",
    ville: "Lyon",
    transport: "Tram T1 - Quai Claude Bernard",
    duree: "3 ans",
    diplome: "Licence",
    debouches: "Psychologue, RH, poursuite en Master",
    cout: "170€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Méthodologie",
      "Mardi : TD de psychologie",
      "Jeudi : Statistiques",
      "Vendredi : Cours magistral"
    ],
    satisfaction: 3.9,
    description: "Associations dynamiques et équilibre entre cours théoriques et pratiques.",
    etudiants: ["Chloé, 20 ans", "Yanis, 22 ans"]
  },
  {
    nom: "BTS Commerce International",
    etablissement: "Lycée Jean Monnet",
    ville: "Marseille",
    transport: "Bus Lignes 15, 22",
    duree: "2 ans",
    diplome: "BTS",
    debouches: "Commercial export, Chargé de clientèle, poursuite en licence pro",
    cout: "250€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Économie internationale",
      "Mardi : Techniques de vente",
      "Mercredi : Langues étrangères",
      "Jeudi : Projet d'entreprise",
      "Vendredi : Stage en entreprise"
    ],
    satisfaction: 4.2,
    description: "Formation professionnalisante avec de nombreux partenariats internationaux.",
    etudiants: ["Marc, 21 ans", "Léa, 20 ans", "Théo, 22 ans"]
  },
  {
    nom: "DUT Génie Civil",
    etablissement: "IUT de Bordeaux",
    ville: "Bordeaux",
    transport: "Tram B - Stade",
    duree: "2 ans",
    diplome: "DUT",
    debouches: "Technicien en BTP, poursuite en licence pro ingénierie",
    cout: "300€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Résistance des matériaux",
      "Mardi : Conception assistée par ordinateur",
      "Mercredi : Géotechnique",
      "Jeudi : Atelier de modélisation",
      "Vendredi : Projet de chantier"
    ],
    satisfaction: 4.0,
    description: "Programme technique complet avec des projets sur le terrain.",
    etudiants: ["Alice, 21 ans", "Julien, 20 ans"]
  },
  {
    nom: "Licence Droit",
    etablissement: "Université de Strasbourg",
    ville: "Strasbourg",
    transport: "Tram B – Université",
    duree: "3 ans",
    diplome: "Licence",
    debouches: "Avocat, Magistrature, poursuite en Master",
    cout: "170€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Droit Public",
      "Mardi : Droit Privé",
      "Mercredi : Méthodologie juridique",
      "Jeudi : Travaux dirigés",
      "Vendredi : Séminaires"
    ],
    satisfaction: 4.3,
    description: "Environnement stimulant avec un accompagnement personnalisé.",
    etudiants: ["Sophie, 22 ans", "Henri, 23 ans"]
  },
  {
    nom: "Master Management",
    etablissement: "ESSEC Business School",
    ville: "Cergy",
    transport: "RER A - Cergy-Préfecture",
    duree: "2 ans",
    diplome: "Master",
    debouches: "Manager, Consultant en stratégie, création d’entreprise",
    cout: "10 000€ / an",
    parcoursup: "Non",
    emploi_du_temps: [
      "Lundi : Stratégie d’entreprise",
      "Mardi : Finance d’entreprise",
      "Mercredi : Marketing digital",
      "Jeudi : Management & Leadership",
      "Vendredi : Ateliers pratiques"
    ],
    satisfaction: 4.7,
    description: "Programme d’excellence avec partenariats internationaux et stages haut de gamme.",
    etudiants: ["Nadia, 24 ans", "Thomas, 25 ans"]
  },
  {
    nom: "BTS Communication",
    etablissement: "Lycée Gustave Eiffel",
    ville: "Nice",
    transport: "Tram 2 - Port Lympia",
    duree: "2 ans",
    diplome: "BTS",
    debouches: "Attaché de presse, Community Manager, poursuite en licence de communication",
    cout: "250€ / an",
    parcoursup: "Oui",
    emploi_du_temps: [
      "Lundi : Techniques de communication",
      "Mardi : Médias digitaux",
      "Mercredi : Création de contenus",
      "Jeudi : Publicité & Stratégie",
      "Vendredi : Projet événementiel"
    ],
    satisfaction: 4.1,
    description: "Formation créative et opérationnelle, axée sur la pratique.",
    etudiants: ["Camille, 20 ans", "Adrien, 21 ans"]
  }
];

const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

function createCard(formation) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${formation.nom}</h2>
    <p><strong>Établissement :</strong> ${formation.etablissement}</p>
    <p><strong>Ville :</strong> ${formation.ville} <em>(${formation.transport})</em></p>
    <p><strong>Durée :</strong> ${formation.duree}</p>
    <p><strong>Diplôme :</strong> ${formation.diplome}</p>
    <p><strong>Débouchés :</strong> ${formation.debouches}</p>
    <p><strong>Coût :</strong> ${formation.cout}</p>
    <p><strong>Parcoursup :</strong> ${formation.parcoursup}</p>
    <p><strong>Emploi du temps :</strong></p>
    <ul>${formation.emploi_du_temps.map(j => `<li>${j}</li>`).join("")}</ul>
    <p><strong>Note de satisfaction :</strong> ⭐ ${formation.satisfaction}/5</p>
    <p><strong>Vie étudiante :</strong> ${formation.description}</p>
    <button disabled>Fonctionnalité indisponible</button>
  `;
  container.appendChild(card);
}

function renderCards() {
  container.innerHTML = "";  // Efface les cartes existantes
  formations.forEach(createCard);  // Crée et affiche toutes les cartes
}

/* =========================
   Initialisation
============================ */
document.addEventListener("DOMContentLoaded", () => {
  // Afficher par défaut la page d'accueil
  switchPage("home");
  
  // Vérifier si la page Formations est déjà active au démarrage
  if (document.getElementById("formations").classList.contains("active-section")) {
    renderCards();  // Afficher toutes les formations si la page Formations est déjà active
  }
});
