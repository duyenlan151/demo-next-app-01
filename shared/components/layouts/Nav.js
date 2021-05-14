import { NavLink } from "./NavLink";
import { useRouter } from "next/router";
import useTrans from '../../../lib/hooks/useTrans';
import { useState } from 'react';
import Link from 'next/link'

function Nav(){
    const trans = useTrans();
    const router = useRouter();
    
    const {
        locale,
        locales,
        defaultLocale = 'vi',
        asPath: currentPath,
      } = useRouter();
    const options = locales?.filter((val) => val !== locale); // filter local hidden if active

    const changeLang = (lang) => {
        router.push(currentPath, '/', { locale:  lang});
    }
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-nav">
                    <NavLink href="/" exact className="nav-item nav-link">{ trans.navbar.home }</NavLink>
                    <NavLink href="/blogs" className="nav-item nav-link">{ trans.navbar.blogs }</NavLink>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Language
                        </a>
                        <div className="dropdown-menu">
                            {locales.map((elm) => (
                                <Link href={currentPath} locale={elm}  key={elm}>
                                    <a className="dropdown-item" >{elm}</a>
                                </Link>
                            ))}
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Nav;