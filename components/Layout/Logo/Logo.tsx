import {ReactNode} from "react";
import Image from "next/image";
import logoImg from '@/public/images/logo.svg'
type Props = {

}

const Logo = (props:Props) => {
    return  <Image src={logoImg} alt='logo' width={64} height={32}/>

}

export default Logo