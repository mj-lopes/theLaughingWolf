export default function outsideClick(elemento, classeAtiva, callback) {
  const eventos = ["touchstart", "click"];

  function fecharElemento(event) {
    if (!elemento.contains(event.target)) {
      eventos.forEach((evento) => {
        document.body.removeEventListener(evento, fecharElemento);
      });
      callback();
    }
  }

  if (elemento.classList.contains(classeAtiva)) {
    eventos.forEach((evento) => {
      setTimeout(() => document.body.addEventListener(evento, fecharElemento));
    });
  }
}

/* 
  Pessoa CLICAR em um ELEMENTO e EXIBE um conteudo 
  Ao CLICAR novamente no ELEMENTO o conteudo é removido
  E se CLICAR em qualquer outro ELEMENTO sem ser o conteúdo exibido tbm faz o conteúdo ser removido
*/
