import NewsletterForm from "@/components/Sections/Newsletter/NewsletterForm/NewsletterForm";
import classes from './Newsletter.module.scss'
import {useState} from "react";

const Newsletter = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    return <section className={classes.Newsletter}>
        <h2 className={classes.Heading}>
            Sign up for Newsletter
        </h2>
        <NewsletterForm setMessage={setMessage} setError={setError}/>
        {message ? <p className={`${classes.Message} ${error ? classes.Error : classes.Success}`}>{message}</p> : ''}
    </section>
};

export default Newsletter;
