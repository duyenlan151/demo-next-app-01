import { NavLink } from "./NavLink";
import { useRouter } from "next/router";
import useTrans from '../../../lib/hooks/useTrans';

function Nav(){
    const trans = useTrans();
    const router = useRouter();
    
    const changeLang = (lang) => {
        console.log(router);
        router.push('/', router['asPath'], { locale: lang });
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
                            <a className="dropdown-item" onClick={() => changeLang('vi')}>vi</a>
                            <a className="dropdown-item" onClick={() => changeLang('en')}>en</a>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Nav;