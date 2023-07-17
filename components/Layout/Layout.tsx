import {ReactNode} from "react";
import MainNavigation from "@/components/Layout/MainNavigation/MainNavigation";
import classes from './Layout.module.scss'
import MainWrapper from "@/components/Layout/MainWrapper/MainWrapper";
type Props = {
    children?: ReactNode,

}

const Layout = (props: Props) => {
    return <>
        <MainNavigation/>
        <MainWrapper>{props.children}</MainWrapper>
    </>
}

export default Layout