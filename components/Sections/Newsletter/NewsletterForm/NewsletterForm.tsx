import {useState} from "react";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import classes from './NewsletterForm.module.scss'

type Props = {
    setMessage: (message) => void
}
const NewsletterForm = (props: Props) => {
    const {setMessage} = props
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const onFormSubmitHandler = async (e) => {
        e.preventDefault()
        setSubmitting(true);
        setMessage('')
        try {
            console.log(JSON.stringify({email}))
            const response = await fetch('https://adchitects-cms.herokuapp.com/newsletter', {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application.json',
                    'Content-Type': 'application/json',
                    "Authorization": `Basic ${btoa('adchitects:jsrulezzz')}`
                }),
                body: JSON.stringify({email})
            });
            const data = await response.json();
            console.log('data', data)
            setMessage(data.message)
            setError(false);
        } catch (error) {
            setError(error)
            console.error(error);
        } finally {
            setSubmitting(false);
        }
        console.log(email)
    }
    return <form className={classes.NewsletterForm} onSubmit={onFormSubmitHandler}>
        <Input placeholder='Type your email' type='email' width={416} height={48} value={email} required={true}
               onChange={(e) => {
                   console.log(e.target.value)
                   setEmail(e.target.value)
               }
               }/>
        <Button title='Submit' type='submit' disabled={submitting}/>
    </form>
}

export default NewsletterForm