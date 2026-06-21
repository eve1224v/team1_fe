import "./qrScanBox.css";

import scanFrame from "../../../assets/qrGuide.svg";

function QrScanBox({ onScanClick }) {
  return (
    <div className="qr-scan-box">
      <img src={scanFrame} alt="QR 스캔 프레임" className="scan-frame-image" />

      <button className="qr-scan-button" onClick={onScanClick}>
        QR 인식
      </button>
    </div>
  );
}

export default QrScanBox;