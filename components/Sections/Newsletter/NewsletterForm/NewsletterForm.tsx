import {useState} from "react";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import classes from './NewsletterForm.module.scss'

type Props = {
    setMessage: (message) => void
}
const NewsletterForm = (props: Props) => {
    const {setMessage, setError} = props
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false);

    const onFormSubmitHandler = async (e) => {
        e.preventDefault()
        setSubmitting(true);
        setMessage('')
        try {
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
            if (!response.ok) {
                setError(true)
            } else {
                setError(false);
            }
            setMessage(data.message)

        } catch (error) {
            setMessage('Ooops! Something went wrong. Try again later')
            setError(true)
        } finally {
            setSubmitting(false);
        }
    }

    return <form className={classes.NewsletterForm} onSubmit={onFormSubmitHandler}>
        <Input placeholder='Type your email' type='email' width={416} height={48} value={email} required={true}
               onChange={(e) => setEmail(e.target.value)}/>
        <Button type='submit' disabled={submitting}>Submit</Button>
    </form>
}

export default NewsletterForm