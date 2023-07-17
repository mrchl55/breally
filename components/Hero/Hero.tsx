import {useState} from "react";
import Image from "next/image";

type Props = {
    img: string,
    text: string,
    imgWidth: number,
    imgHeight: number,
};

const Hero = (props: Props) => {
    const {img, text, imgWidth, imgHeight} = props;
    return (
        <section>
            <div>
                <h1>
                    {text}
                </h1>
            </div>
            <div>
                <Image src={img} alt={text} width={imgWidth} height={imgHeight}/>
            </div>
        </section>

    );
};

export default Hero;
