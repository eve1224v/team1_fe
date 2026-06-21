import "./qrStatusModal.css";

import scanningCharacter from "../../../assets/scanningCharacter.svg";
import successCharacter from "../../../assets/successCharacter.svg";

function QrStatusModal({ status, onClose }) {
  const isScanning = status === "scanning";

  return (
    <div className="qr-modal-layer">
      <div className="qr-status-modal">
        <button className="qr-modal-close-button" onClick={onClose}>
          ×
        </button>

        <img
          src={isScanning ? scanningCharacter : successCharacter}
          alt={isScanning ? "인증 중" : "인증 완료"}
          className="qr-modal-character"
        />

        <h2 className="qr-modal-title">
          {isScanning ? "인증 중이에요..." : "인증 완료!"}
        </h2>

        {!isScanning && <p className="qr-modal-description">맛있게 드세요!</p>}
      </div>
    </div>
  );
}

export default QrStatusModal;