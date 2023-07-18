import classes from "./Testimonial.module.scss";
import Image from "next/image";
import quotationMark from "@/public/images/quotation-mark.svg";
type Props = {
  author: string;
  text: string;
};

const Testimonial = (props: Props) => {
  const { author, text } = props;
  return (
    <section className={classes.Testimonial}>
      <div className={classes.Quote}>
        <Image
          src={quotationMark}
          alt="quotation mark"
          width={48}
          height={48}
        />
      </div>
      <div className={classes.Content}>
        <h3>{text}</h3>
      </div>
      <div className={classes.Author}>
        <h3>{author}</h3>
      </div>
    </section>
  );
};

export default Testimonial;
