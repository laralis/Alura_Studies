import { iTarefa } from "../../types/iTarefa";
import Item from "./Item";
import style from "./style.module.scss";
interface ListProps {
  tarefas: iTarefa[];
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void;
}
export default function List({ tarefas, selecionaTarefa }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} key={item.id} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}
