import debounce from "./debounce.js";

export default class animaSection {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.checarDistancia = debounce(this.checarDistancia.bind(this), 50);
  }

  pegarDistancia() {
    this.distancias = Array.from(this.sections).map((section) => {
      const topo = section.offsetTop;
      return {
        topo,
        elemento: section,
      };
    });
  }

  checarDistancia() {
    this.distancias.forEach((sessao) => {
      const sessaoVisivel = Math.floor(sessao.topo - window.innerHeight / 1.5);

      if (window.pageYOffset > sessaoVisivel) {
        sessao.elemento.classList.add("ativo");
        console.log("oi");
      }
    });
  }

  scrollEventListener() {
    window.addEventListener("scroll", this.checarDistancia);
  }

  init() {
    this.pegarDistancia();
    this.scrollEventListener();
  }
}
