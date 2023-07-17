import NewsletterForm from "@/components/Sections/Newsletter/NewsletterForm/NewsletterForm";
import classes from './Newsletter.module.scss'

const Newsletter = () => {
    return <section className={classes.Newsletter}>
        <h2>
            Sign up for Newsletter
        </h2>
<NewsletterForm />
        </section>
};

export default Newsletter;
