import { salvarNoLocalStorage } from "./localStorage.servico";
import { buscarNoLocalStorage } from "./localStorage.servico";

export const salvarJogo = (jogo) => {
    const jogos = buscarNoLocalStorage("jogos") || [];
    if(!jogo.id) {
      jogo.id = Date.now();
      jogos.push(jogo);
    } else {
      const index = jogos.findIndex(() => jogo.id === jogo.id);
      jogo[index] = jogo;
    }

    salvarNoLocalStorage("jogos", jogos)
 }



export const buscarJogos = () => {
   return buscarNoLocalStorage("jogos") || [];
}