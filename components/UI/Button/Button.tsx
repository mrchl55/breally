import classes from './Button.module.scss'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    title: string,
}

const Button: React.FC<Props> = (props) => {
    const {type, href, title, onClick, disabled} = props
    return <button className={classes.Button} type={type} href={href} onClick={onClick} disabled={disabled}>
        {title}
    </button>
}

export default Button