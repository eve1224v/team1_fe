import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../features/mainPage/pages/HomePage";
import RestaurantDetailPage from "../features/mainPage/pages/RestaurantDetailPage";
import MyPage from "../features/myPage/pages/MyPage";
import QRPage from "../features/qrPage/pages/QRPage";


import { ROUTES } from "./routes.constant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.RESTAURANT_DETAIL()} element={<RestaurantDetailPage />} />
      <Route path={ROUTES.MYPAGE} element={<MyPage />} />
      <Route path="/qrpage" element={<QRPage />} />
    </Routes>
  );
}

export default AppRouter;