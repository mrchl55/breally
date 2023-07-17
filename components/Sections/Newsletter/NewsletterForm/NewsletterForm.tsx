import {useState} from "react";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import classes from './NewsletterForm.module.scss'


const NewsletterForm = () => {
    const [email, setEmail] = useState('')
    const onFormSubmitHandler = (e) => {
        e.preventDefault()
        console.log(email)
    }
    return <form className={classes.NewsletterForm} onSubmit={onFormSubmitHandler}>
        <Input placeholder='Type your email' type='email' width={416} height={48} value={email} required={true} onChange={(e) => {
            console.log(e.target.value)
            setEmail(e.target.value)}
        }/>
        <Button title='Submit' type='submit'/>
    </form>
}

export default NewsletterForm