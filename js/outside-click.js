export default function outsideClick(elemento, callback) {
  const eventos = ["touchstart", "click"];
  const atributo = "data-outside";

  function fecharElemento(event) {
    if (!elemento.contains(event.target)) {
      eventos.forEach((evento) => {
        document.body.removeEventListener(evento, fecharElemento);
      });
      callback();
      elemento.removeAttribute(atributo);
    }
  }

  if (!elemento.hasAttribute(atributo)) {
    eventos.forEach((evento) => {
      setTimeout(() => document.body.addEventListener(evento, fecharElemento));
    });
    elemento.setAttribute(atributo, "");
  }
}

/* 
  Pessoa CLICAR em um ELEMENTO e EXIBE um conteudo 
  Ao CLICAR novamente no ELEMENTO o conteudo é removido
  E se CLICAR em qualquer outro ELEMENTO sem ser o conteúdo exibido tbm faz o conteúdo ser removido
*/
