import './siderbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faImage } from '@fortawesome/free-solid-svg-icons';
function Siderbar() {
    return (
        <div className="wrap-siderbar">
            <div className="fb-home">
                <div className="home">
                    <FontAwesomeIcon className="fb-ico-sider" icon={faHome} />
                    <p>Trang chủ</p>
                </div>
                <div className="profile">
                    <FontAwesomeIcon className="fb-ico-sider" icon={faImage} />
                    <p>Rinh</p>
                </div>
            </div>
            <div className="fb-friend">
                <div className="friend">Bạn bè</div>
                <div className="save">Đã lưu</div>
                <div className="recently">Gần đây nhất</div>
                <div className="market">Marketplace</div>
                <div className="watch">Watch</div>
                <div className="view-all">Xem tất cả</div>
            </div>
            <div className="fb-group">
                <div className="gourp1">DBO_ IndoNaga_VN</div>
                <div className="gourp2">DBO_Naga.VNs</div>
                <div className="gourp3">Official Dragon Ball indonaga Server (DBO)</div>
                <div className="gourp4">Official Dragon Ball indonaga Server (DBO)</div>
                <div className="gourp5">Xem tất cả</div>
            </div>
            <div className="shortcuts">Siêu nhân gao</div>
            <div className="shortcuts1">Siêu nhân Cuồng Phong</div>
            <div className="shortcuts2">Kamen Rider Ryuki</div>
        </div>
    );
}
export default Siderbar;
