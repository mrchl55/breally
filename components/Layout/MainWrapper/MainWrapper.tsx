import classes from './MainWrapper.module.scss'
import {ReactNode} from "react";
type Props = {
    children?: ReactNode,

}

const MainWrapper = (props: Props) => {
    return <main className={classes.MainWrapper}>{props.children}</main>

}

export default MainWrapper