export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
    // a função bind vincula a uma função a um determinado this, no caso,
    // ao próprio elemento instanciador da classe, do contrário, ao fazer o uso do
    // this em link.addEventListener o this em referencia para de ser o objeto instanciado
    // e passa a ser o link
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
