import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import NavbarTop from "./components/NavbarTop";
import FooterBot from "./components/FooterBot";
import NotFound from "./pages/NotFound";
import Dashboard from "./admin/Dashboard";
import FreeFire from "./admin/Freefire";
import Mobilelegend from "./admin/Mobilelegend";
import Mobilelegend_pre from "./admin/Mobilelegend_3";
import Mobilelegend_b from "./admin/Mobilelegend_2";
import Category from "./admin/Category";
import Login from "./auth/Login";
import Freefire from "./pages/order/Freefire";
import TermsAndCondition from "./pages/TermAndCondition";
import Tentang from "./pages/Tentang";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Qris from "./admin/Qris";
import 'react-bootstrap';
import Bank from "./admin/Bank";
import Ewallet from "./admin/Ewallet";
import Mobilelegends from "./pages/order/Mobilelegends";
import Mobilelegends_B from "./pages/order/Mobilelegends_2";
import Mobilelegends_Pre from "./pages/order/Mobilelegends_3";
import Genshinimpact from "./admin/Genshinimpact";
import GenshinImpact from "./pages/order/Genshinimpact";
import BannerSetting from "./admin/BannerSetting";
import PopUp from "./admin/PopUp";
import Daftalayanan from "./pages/Daftalayanan";
import WhatsappSetting from "./admin/WhatsappSetting";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/Terms" element={<TermsAndCondition />} />
        <Route path="/Tentang" element={<Tentang />} />
        <Route path="/daftar-layanan" element={<Daftalayanan />} />
        <Route path="/admin/whatsapp-setting" element={<WhatsappSetting />} />
        <Route path="/Tentang" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/admin/banner-setting" element={<BannerSetting />} />
        <Route path="/admin/pop-up" element={<PopUp />} />
        <Route path="/admin/qris" element={<Qris />} />
        <Route path="/admin/bank" element={<Bank />} />
        <Route path="/admin/e-wallet" element={<Ewallet />} />
        <Route path="/order/free-fire" element={<Freefire />} />
        <Route path="/admin/free-fire" element={<FreeFire/>} />
        <Route path="/admin/genshin-impact" element={<Genshinimpact/>} />
        <Route path="/order/genshin-impact" element={<GenshinImpact/>} />
        <Route path="/admin/dashboard-admin" element={<Dashboard />} />
        <Route path="/admin/category-game" element={<Category />} />
        <Route path="/admin/mobile-legend-a" element={<Mobilelegend />} />
        <Route path="/admin/mobile-legend-b" element={<Mobilelegend_b />} />
        <Route path="/admin/mobile-legend-pre-order" element={<Mobilelegend_pre />} />
        <Route path="/order/mobile-legends-a" element={<Mobilelegends />} />
        <Route path="/order/mobile-legends-b" element={<Mobilelegends_B />} />
        <Route path="/order/mobile-legends-pre-order" element={<Mobilelegends_Pre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterBot />
    </Router>
  );
}

export default App;
