// Buttons filter

function filterByColor(color) {
  const boxes = document.querySelectorAll(".type");
  boxes.forEach((box) => {
    if (color === "*" || box.getAttribute("title") === color) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

const buttons = document.querySelectorAll(".buttons-container button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const filter = this.getAttribute("data-filter");
    filterByColor(filter);
  });
});

// SELECTED Button

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez le premier bouton par défaut
  const defaultButton = document.querySelector(
    ".buttons-container button:first-child"
  );
  defaultButton.classList.add("selected");

  // Ajoutez un gestionnaire d'événements à tous les boutons
  const buttons = document.querySelectorAll(".buttons-container button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Retirez la classe sélectionnée de tous les boutons
      buttons.forEach((btn) => btn.classList.remove("selected"));
      // Ajoutez la classe sélectionnée au bouton cliqué
      this.classList.add("selected");
    });
  });
});

// Sections apparition

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      // Supprimer la classe active de toutes les sections
      document.querySelectorAll("main section").forEach((section) => {
        section.classList.remove("active");
      });

      // Ajouter la classe active à la section cible
      targetSection.classList.add("active");
    });
  });
});

// SELECTED Button Navbar

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Empêcher le comportement par défaut du lien (la redirection)
      event.preventDefault();

      // Supprimer la classe 'selected' de tous les liens
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("selected");
      });

      // Ajouter la classe 'selected' au lien actuellement cliqué
      link.classList.add("selected");
    });
  });
});

// SWITCH IMAGE ARROW

function prevImage(button) {
  var box = button.closest(".box");
  var images = box.querySelectorAll(".image img");
  var currentIndex = Array.from(images).findIndex(
    (img) => img.style.display !== "none"
  );
  var newIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].style.display = "none";
  images[newIndex].style.display = "block";
}

function nextImage(button) {
  var box = button.closest(".box");
  var images = box.querySelectorAll(".image img");
  var currentIndex = Array.from(images).findIndex(
    (img) => img.style.display !== "none"
  );
  var newIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "none";
  images[newIndex].style.display = "block";
}

// Fonction pour agrandir et centrer la boîte

function toggleEnlargeBox(button) {
  const box = button.closest(".box");
  const icon = button.querySelector("i");

  box.classList.toggle("enlarged");

  // Changer l'icône selon l'état de la boîte
  if (box.classList.contains("enlarged")) {
    icon.classList.remove("fa-expand");
    icon.classList.add("fa-compress");
  } else {
    icon.classList.remove("fa-compress");
    icon.classList.add("fa-expand");
  }

  // Fermer la boîte agrandie lorsqu'on clique en dehors d'elle
  document.addEventListener("click", function closeBox(e) {
    if (!box.contains(e.target) && !e.target.closest(".enlarge-button")) {
      box.classList.remove("enlarged");
      icon.classList.remove("fa-compress");
      icon.classList.add("fa-expand");
      document.removeEventListener("click", closeBox);
    }
  });
}
