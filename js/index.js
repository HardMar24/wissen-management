 const products = {
      Kuchen: [
        { name: "Birthday-cake", price: "50,00 €", image: "Images/BirthdayCake.jpg" },
        { name: "Babyshower-cake", price: "60,00 €", image: "Images/BabyshowerCake1.jpg" },
        { name: "Bento-cake", price: "15,00 €", image: "Images/BentoCake1.jpg" },
        { name: "Buche de noel", price: "20,00 €", image: "Images/BentoCake1.jpg" }
      ],
      Auffrischung: [
        { name: "Bissap", price: "5,00 €", image: "Images/Bissap.jpg" },
        { name: "Joghurt", price: "5,00 €", image: "Images/Joghurt.jpg" }
      ]
    };

const offers = {
    28: [
    { name: "Bento-cake", oldPrice: "15,00 €", newPrice: "10,00 €", image: "Images/BentoCake1.jpg" }
    ],
    29: [
    { name: "Auffrischung", oldPrice: "5,00 €", newPrice: "3,50 €", image: "Images/Bissap.jpg" }
    ],
    51: [
    { name: "Buche de noel", oldPrice: " 20,00 €", newPrice: "15,00 €", image: "Images/BentoCake1.jpg" }
    ]
    };

// === PRODUCT GALLERY RENDERING ===
const galleryImages = {
    Kuchen: [
        "Images/BirthdayCake.jpg",
        "Images/BabyshowerCake1.jpg",
        "Images/BentoCake1.jpg",
        "Images/BentoCake1.jpg",
        "Images/Cupcake.jpg",
        "Images/MagnumCake.jpg"
    ],
    Auffrischung: [
        "Images/Bissap.jpg",
        "Images/Joghurt.jpg"
    ]
};

  // Mode clair / sombre
const themeToggle = document.getElementsByClassName("theme-toggle");
Array.from(themeToggle).forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("dark-theme");
    document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", document.body.dataset.theme);
  });
});

// Charger le thème sauvegardé
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
});

function loadGalleryImages(category = "Kuchen") {
    const images = galleryImages[category];

    const container = document.getElementById("gallery-list");
    container.innerHTML = "";
    images.forEach(img => {
        container.innerHTML +=  `
            <div class="item">
                <img src="${img}"">
            </div>`;
    });
}
loadGalleryImages(); // Initial load
document.getElementById("Kategorie-select").addEventListener("change", e => {
    const selected = e.target.value;
    loadGalleryImages(selected);
});


document.getElementById("product-category").addEventListener("change", e => {
    const selected = e.target.value;
    const list = products[selected];
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `
            <div class="item">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>`;
    });
});

document.getElementById("week-select").addEventListener("change", e => {
    const selected = e.target.value;
    const list = offers[selected];
    const container = document.getElementById("offer-list");
    container.innerHTML = "";
    list.forEach(o => {
    container.innerHTML += `
        <div class="item">
        <img src="${o.image}" alt="${o.name}">
        <h3>${o.name}</h3>
        <p><s>${o.oldPrice}</s> <strong>${o.newPrice}</strong></p>
        </div>`;
    });
});

// Initial load
document.getElementById("product-category").dispatchEvent(new Event("change"));
document.getElementById("week-select").dispatchEvent(new Event("change"));

const groupKuchen = document.getElementById("group-kuchen");
const groupAuffrischung = document.getElementById("group-auffrischung");
products.Kuchen.forEach(cake => {
    groupKuchen.innerHTML += `<option value="${cake}">${cake.name} - ${cake.price}</option>`;
});
products.Auffrischung.forEach(softDrink => {
    groupAuffrischung.innerHTML += `<option value="${softDrink}">${softDrink.name} - ${softDrink.price}</option>`;
});
