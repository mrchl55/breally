import {ReactNode} from "react";
import MainNavigation from "@/components/Layout/MainNavigation/MainNavigation";

type Props = {
    children?: ReactNode,

}

const Layout = (props: Props) => {
    return <>
        <MainNavigation/>
        <main>{props.children}</main>
    </>
}

export default Layout