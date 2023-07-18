import { useState } from "react";
import Button from "@/components/UI/Button/Button";
import Input from "@/components/UI/Input/Input";
import classes from "./NewsletterForm.module.scss";

type Props = {
  setMessageHandler: (message: string) => void;
  setErrorHandler: (error: boolean) => void;
};
const NewsletterForm = (props: Props) => {
  const { setMessageHandler, setErrorHandler } = props;
  const [email, setEmail] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setMessageHandler("");
    try {
      const response = await fetch(
        "https://adchitects-cms.herokuapp.com/newsletter",
        {
          method: "POST",
          headers: new Headers({
            Accept: "application.json",
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa("adchitects:jsrulezzz")}`,
          }),
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        setErrorHandler(true);
      } else {
        setErrorHandler(false);
      }
      setMessageHandler(data.message);
    } catch (error) {
      setMessageHandler("Ooops! Something went wrong. Try again later");
      setErrorHandler(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className={classes.NewsletterForm} onSubmit={onFormSubmitHandler}>
      <Input
        placeholder="Type your email"
        type="email"
        width={416}
        height={48}
        value={email}
        required={true}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" disabled={submitting}>
        Submit
      </Button>
    </form>
  );
};

export default NewsletterForm;
