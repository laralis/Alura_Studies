import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { iTarefa } from "../types/iTarefa";
import style from "./style.module.scss";
import { useState } from "react";
function App() {
  const [tarefas, setTarefas] = useState<iTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<iTarefa>();

  function selecionaTarefa(tarefaSelecionada: iTarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selected: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }
  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selected: false,
              complited: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
