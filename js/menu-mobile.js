import outsideClick from "./outside-click.js";

export default class menuMobile {
  constructor(botao, nav) {
    this.btn = document.querySelector(botao);
    this.nav = document.querySelector(nav);

    this.eventos = ["click", "touchstart"];

    this.clicouBotao = this.clicouBotao.bind(this);
    this.adicionarEventoClick();
  }

  clicouBotao(event) {
    event.preventDefault();
    this.nav.classList.toggle("ativo");
    outsideClick(this.nav, () => {
      this.nav.classList.remove("ativo");
    });
  }

  adicionarEventoClick() {
    this.eventos.forEach((evento) => {
      this.btn.addEventListener(evento, this.clicouBotao);
    });
  }
}
