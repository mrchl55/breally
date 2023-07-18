import Logo from "@/components/Layout/Logo/Logo";
import Link from "next/link";
import useSWR from "swr";
import {getData} from "@/lib/helpers";
import Button from "@/components/UI/Button/Button";
import {PageData} from "@/models/page";
import classes from './MainNavigation.module.scss'

type NavItem = PageData

const MainNavigation = () => {
    const {data: navItems} = useSWR<NavItem[]>('https://adchitects-cms.herokuapp.com/pages', getData)
    return <header className={classes.MainNav}>
        <Link href='/' className={classes.Logo}>
            <Logo/>
        </Link>
        {navItems ? <nav>
            <ul>
                {navItems.filter(item => item.url !== '/').map(item => {
                    const pageTitle = item.url.replace('/', '')
                    const pageTitleCamelCase = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
                    return <li id={item.id} key={item.id}><Link href={item.url}>{pageTitleCamelCase}</Link></li>
                })}
            </ul>
        </nav> : ''}
        <div>
            <Button>Contact Us</Button>
        </div>
    </header>
}

export default MainNavigation