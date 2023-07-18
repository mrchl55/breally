import Image from "next/image";
import logoImg from "@/public/images/logo.svg";


const Logo = () => {
  return <Image src={logoImg} alt="logo" width={89} height={32} />;
};

export default Logo;
