import Inicial from "../../componentes/Inicial/Inicial";
import { useNavigate } from "react-router-dom";
import { buscarJogos } from "../../servicos/jogos.servico";
import { useState } from "react";
import { salvarNoLocalStorage } from "../../servicos/localStorage.servico";
import "./PaginaListaJogos.css";
import { FaTrash } from "react-icons/fa";
import { FaPenFancy } from "react-icons/fa";
import { toast } from "react-toastify";
import InputCustomizado from "../../componentes/InputCustomizado/InputCustomizado";

function PaginaListaJogos() {
  const navigate = useNavigate();
  const [listaJogos, setListaJogos] = useState(buscarJogos());
  const [pesquisar, setPesquisar] = useState("");

  const excluirJogo = (jogoParaExcluir) => {
    if (
      confirm(`deseja realmente remover o jogo: ${jogoParaExcluir.nomeJogo}`)
    ) {
      const jogoDeletado = listaJogos.filter(
        (item) => item.id !== jogoParaExcluir.id,
      );
      setListaJogos(jogoDeletado);
      salvarNoLocalStorage("jogos", jogoDeletado);
      toast.success("jogo excluido com sucesso");
    }
  };

  const editarJogo = (jogoEditado) => {
    navigate("/cadastro-jogos/" + jogoEditado.id);
  };

  const jogosFiltrados = listaJogos.filter((item) => {
    return item.nomeJogo.toLowerCase().includes(pesquisar);
  });

  return (
    <Inicial voltarPara="/">
      <div className="titulo">
        <h2>lista de jogos</h2>
      </div>
      <InputCustomizado
        label="pesquisar"
        placeholder="digite o nome do jogo"
        value={pesquisar}
        onChange={(e) => setPesquisar(e.target.value)}
      />
      {jogosFiltrados.map((item, index) => {
        return (
          <div key={index} className="PaginaListaJogos_root">
            <div className="PaginaListaJogos_jogo">
              <strong>jogo:{item.nomeJogo}</strong>
              <strong>data de lançamento:{item.dataLancamento}</strong>
              <strong>desenvolvedora:{item.desenvolvedora}</strong>
              <strong>gênero:{item.genero}</strong>
              <strong>tempo de jogo:{item.tempoJogo}</strong>
              <strong>link de download:{item.linkDownload}</strong>
            </div>
            <div className="PaginaListaJogos_icones">
              <FaTrash
                size={24}
                color="red"
                onClick={() => excluirJogo(item)}
              />
              <FaPenFancy
                size={24}
                color="green"
                onClick={() => editarJogo(item)}
              />
            </div>
          </div>
        );
      })}
    </Inicial>
  );
}

export default PaginaListaJogos;
