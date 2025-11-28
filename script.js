window.addEventListener('scroll', function () {
    const header = document.querySelector('.site-header');

    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



// Récupère toutes les sections et liens du menu
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


const placeholder = document.querySelector('.video-placeholder');
const youtubeVideo = document.querySelector('.youtube-video');

placeholder.addEventListener('click', () => {
    placeholder.style.display = 'none';
    
    // Ajout d'autoplay à l'iframe YouTube
    const src = youtubeVideo.getAttribute('src');
    youtubeVideo.setAttribute('src', src + "&autoplay=1");
});





const citations = [
    "Tirer parti des méthodologies agiles pour fournir une synthèse pertinente des grandes orientations.",
    "Une équipe professionnelle qui dépasse toujours nos attentes. Leur impact sur notre croissance est énormeExploitez les opportunités les plus faciles à saisir pour identifier une activité à valeur ajoutée approximative à tester en version bêta. Réduisez la fracture numérique grâce à des actions supplémentaires.",
    "Leur expertise technique et leur rapidité d’exécution nous ont permis d'accélérer nos projets."
];

const auteurs = document.querySelectorAll(".auteur");
const citationEl = document.getElementById("citation");

let index = 0;

function afficherCitation(i) {
    // changer la citation
    citationEl.style.opacity = 0;
    setTimeout(() => {
        citationEl.textContent = citations[i];
        citationEl.style.opacity = 1;
    }, 300);

    // changer l’actif
    auteurs.forEach(a => a.classList.remove("actif"));
    auteurs[i].classList.add("actif");

    index = i; // mise à jour index actuel
}

// clic manuel
auteurs.forEach(auteur => {
    auteur.addEventListener("click", () => {
        const i = parseInt(auteur.dataset.index);
        afficherCitation(i);
    });
});

// défilement automatique
setInterval(() => {
    index = (index + 1) % citations.length;
    afficherCitation(index);
}, 5000);
