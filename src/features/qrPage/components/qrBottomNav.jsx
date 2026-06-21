import "./qrBottomNav.css";

import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../router/routes.constant";

import homeIcon from "../../../assets/homeDefault.svg";
import mypageIcon from "../../../assets/mypageIcon.svg";
import qrIcon from "../../../assets/qrIcon2.svg";

function QrBottomNav() {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      <button className="nav-item" onClick={() => navigate(ROUTES.HOME)}>
        <img src={homeIcon} alt="홈 아이콘" className="nav-icon" />

        <span className="nav-text">홈</span>
      </button>

      <button className="qr-button" onClick={() => navigate(ROUTES.QR)}>
        <img src={qrIcon} alt="QR 아이콘" className="qr-icon" />
      </button>

      <button className="nav-item" onClick={() => navigate(ROUTES.MYPAGE)}>
        <img src={mypageIcon} alt="마이페이지 아이콘" className="nav-icon" />

        <span className="nav-text">나의 제휴</span>
      </button>
    </nav>
  );
}

export default QrBottomNav;
