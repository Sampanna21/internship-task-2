import Handlebars from "handlebars";
// Import CSS
import './assets/css/style.css';

// Import partials
import headerPartial from "./templates/_partials/header.hbs?raw";
import footerPartial from "./templates/_partials/footer.hbs?raw";

// Register partials globally
Handlebars.registerPartial("header", headerPartial);
Handlebars.registerPartial("footer", footerPartial);

// Map page paths to templates
const pages = {
  "/": "index.hbs",
  "/index.html": "index.hbs",
  "/about.html": "about.hbs",
  "/contact.html": "contact.hbs",
  "/bacteria.html": "bacteria.hbs",
  "/fungi.html": "fungi.hbs",
  "/virus.html": "virus.hbs",
  "/protozoa.html": "protozoa.hbs",
};

// Determine current page
const currentPage = window.location.pathname;
const templateFile = pages[currentPage] || "index.hbs"; // fallback to home

// Dynamically import the template
const templateModule = await import(`./templates/${templateFile}?raw`);
const templateSource = templateModule.default || templateModule;

// Compile template
const template = Handlebars.compile(templateSource);

// Inject into the page
document.getElementById("app").innerHTML = template({});

// Card animation (if there are any cards)
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => card.classList.add('animate-down'), index * 200);
  });
});
