import classes from './Button.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string,
}

const Button = (props: Props) => {
    const {type, href, children, onClick, disabled} = props
    return <button className={classes.Button} type={type} href={href} onClick={onClick} disabled={disabled}>
        {children}
    </button>
}

export default Button