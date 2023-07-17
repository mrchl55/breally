
type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
    const {type, href, title, onClick} = props
    return <input />
}

export default Input