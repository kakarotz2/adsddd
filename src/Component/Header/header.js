import { Logo, Mess, Notifical, Search } from '../../sgv';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <nav className="wrap-header">
                <div className="log">
                    <Logo />
                </div>
                <div className="search">
                    <Search />
                    <input type="text" placeholder="Tìm kiếm trên Facebook" />
                </div>
                <div className="action">
                    <div className="mess">
                        <Mess />
                    </div>
                    <div className="notifical">
                        <Notifical />
                        ads
                    </div>
                    <div className="profile">ád</div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
