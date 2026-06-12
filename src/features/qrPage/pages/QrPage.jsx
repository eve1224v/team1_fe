import { useEffect, useState } from "react";

import MainHeader from "../../myPage/components/mainHeader";
import BottomNav from "../components/qrBottomNav";

import QrScanBox from "../components/qrScanBox";
import QrStatusModal from "../components/qrStatusModal";


import { ROUTES } from "../../../router/routes.constant";

import styles from "./QrPage.module.css";

function QrPage() {
  const [scanStatus, setScanStatus] = useState("idle");


  const handleScanClick = () => {
    setScanStatus("scanning");
  };

  const handleCloseModal = () => {
    setScanStatus("idle");
  };

  useEffect(() => {
    if (scanStatus !== "scanning") return;

    const timer = setTimeout(() => {
      setScanStatus("success");
    }, 1500);

    return () => clearTimeout(timer);
  }, [scanStatus]);

  return (
    <div className={styles.qrPage}>
      <div
        className={styles.qrFrame}
        //style={{ backgroundImage: `url(${qrBackground})` }}
      >
        <MainHeader />

        <main className={styles.qrMain}>
          <QrScanBox onScanClick={handleScanClick} />
        </main>

        {scanStatus !== "idle" && (
          <QrStatusModal status={scanStatus} onClose={handleCloseModal} />
        )}

        <BottomNav />
      </div>
    </div>
  );
}

export default QrPage;