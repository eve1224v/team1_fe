import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../features/mainPage/pages/HomePage";
import MyPage from "../features/myPage/pages/MyPage";
import College from "../features/myPage/pages/College";
import Department from "../features/myPage/pages/Department";
import Favorite from "../features/myPage/pages/Favorite";

import RestaurantDetailPage from "../features/mainPage/pages/RestaurantDetailPage";

import { ROUTES } from "./routes.constant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/college" element={<College />} />
      <Route path="/mypage/department" element={<Department />} />
      <Route path="/mypage/favorite" element={<Favorite />} />

      <Route
        path={ROUTES.RESTAURANT_DETAIL()}
        element={<RestaurantDetailPage />}
      />
    </Routes>
  );
}

export default AppRouter;
