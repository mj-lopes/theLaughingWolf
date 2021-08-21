import SlideNav from "./slide.js";
import animaSection from "./anima-section.js";
import ScrollSuave from "./scroll-suave.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();

const anima = new animaSection("[data-animaScroll]");
anima.init();

const scrollToSection = new ScrollSuave('a[href^="#"]');
scrollToSection.init();
