import { iTarefa } from "../../../types/iTarefa";
import style from "./Item.module.scss";
interface ItemProps extends iTarefa {
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void;
}
export default function Item({
  tarefa,
  tempo,
  selected,
  complited,
  id,
  selecionaTarefa,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        complited ? style.itemCompletado : ""
      }`}
      onClick={() => !complited &&
        selecionaTarefa({ tarefa, tempo, id, selected, complited })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {complited && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
  );
}
