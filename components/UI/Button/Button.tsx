
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &  {
    title: string,
}

const Button: React.FC<Props> = (props) => {
    const {type, href, title, onClick} = props
    return <button type={type} href={href} onClick={onClick}>
        {title}
    </button>
}

export default Button