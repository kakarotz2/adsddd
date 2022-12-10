import { Logo } from '../../sgv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import './header.scss';

function Header() {
    return (
        <header className="header">
            <nav className="wrap-header">
                <div className="log">
                    <Logo />
                </div>
                <div className="search">
                    <div className="wrap-search">
                        <FontAwesomeIcon className="icon-search" icon={faSearch} />
                        <input className="fb-search" type="text" placeholder="Tìm kiếm trên Facebook" />
                    </div>
                </div>
                <div className="action">
                    <div className="fb-ac mess">
                        <FontAwesomeIcon className="fb-icons" icon={faFacebookMessenger} />
                    </div>
                    <div className="fb-ac notifical">
                        <FontAwesomeIcon className="fb-icons" icon={faBell} />
                    </div>
                    <div className="fb-ac profile">
                        <img
                            src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/318110836_3225612767769185_7128307629756377974_n.png?stp=cp0_dst-png_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=zg5D1GHSF3cAX-LEhmB&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCxDxv_1hXuNxNSC4C47Ne0r3PWDNK_drU65Hj7yK69jw&oe=6399B8D2"
                            alt=""
                        />
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
