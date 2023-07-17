import {useState} from "react";
import Image from "next/image";
import classes from "./Hero.module.scss";
type Props = {
    img: string,
    text: string,
    alt?: string,
    imgWidth: number,
    imgHeight: number,
};

const Hero = (props: Props) => {
    const {img, text, imgWidth, imgHeight, alt} = props;
    return (
        <section className={classes.Hero}>
            <div>
                <h1>
                    {text}
                </h1>
            </div>
            <div>
                <Image src={img} alt={alt ?? text} width={imgWidth} height={imgHeight}/>
            </div>
        </section>

    );
};

export default Hero;
