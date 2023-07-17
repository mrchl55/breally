type Props = {
    author: string,
    text: string,

};

const Testimonial = (props: Props) => {
    const {author, text} = props;
    return (
        <section>
            <div>
                <h3>
                    {text}
                </h3>
            </div>
            <div>
                <p>{author}</p>
            </div>
        </section>

    );
};

export default Testimonial;
