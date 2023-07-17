import classes from './Input.module.scss'
type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
    const {type, onChange, width, height, required, placeholder} = props
    return <input className={classes.Input} style={{width: `${width}px`, height: `${height}px`}} onChange={onChange} required={required} type={type} placeholder={placeholder}/>
}

export default Input