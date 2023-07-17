import NewsletterForm from "@/components/Sections/Newsletter/NewsletterForm/NewsletterForm";
import classes from './Newsletter.module.scss'
import {useState} from "react";

const Newsletter = () => {
    const [message, setMessage] = useState('');

    return <section className={classes.Newsletter}>
        <h2>
            Sign up for Newsletter
        </h2>
        <NewsletterForm setMessage={setMessage}/>
        {message ? <p>{message}</p> : ''}
    </section>
};

export default Newsletter;
