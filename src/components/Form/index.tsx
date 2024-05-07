import { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import style from "./style.module.scss";
import React from "react";
import { iTarefa } from "../../types/iTarefa";
import { v4 as uuidv4 } from "uuid";
interface formProps {
  setTarefas: Dispatch<SetStateAction<iTarefa[]>>;
}

export default function Form({ setTarefas }: formProps) {
  const [time, setTime] = useState("00:00");
  const [task, setTask] = useState("");
  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newtask: iTarefa = {
      tarefa: task,
      tempo: time,
      selected: false,
      complited: false,
      id: uuidv4(),
    };
    setTarefas((tarefasAntigas) => [...tarefasAntigas, newtask]);
    setTime("00:00");
    setTask("");
  }
  return (
    <form onSubmit={addTask} className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          step={1}
          max="01:30:00"
          min="00:00:00"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
