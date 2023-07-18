import classes from "./Button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

const Button = (props: Props) => {
  const { type, children, onClick, disabled, href } = props;
  return (
    <a href={href}>
      <button
        className={classes.Button}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </a>
  );
};

export default Button;
