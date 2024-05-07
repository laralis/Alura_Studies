import style from "./Clock.module.scss";
interface ClockProps {
  tempo: number | undefined;
}
export default function Clock({ tempo = 0 }: ClockProps) {
  const minutes = Math.floor(tempo / 60);
  const seconds = tempo % 60;
  const [minutosDezena, minutosUnidade] = String(minutes).padStart(2, "0");
  const [segundoDezena, segundoUnidade] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minutosDezena}</span>
      <span className={style.relogioNumero}>{minutosUnidade}</span>

      <span className={style.relogioDivisao}>:</span>

      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
