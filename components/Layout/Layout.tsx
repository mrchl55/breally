import {ReactNode} from "react";
import MainNavigation from "@/components/Layout/MainNavigation/MainNavigation";

type Props = {
    children?: ReactNode,

}

const Layout = (props:Props) => {
    console.log(props)
    return <>
    <MainNavigation />
        <main>{props.children}</main>
    </>
}

export default Layout