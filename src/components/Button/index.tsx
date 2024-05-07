import style from "./style.module.scss";
interface ButtonProps {
  children?: React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
}
function Button({ children, type = "button", onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={style.botao} type={type}>
      {children}
    </button>
  );
}
export default Button;
