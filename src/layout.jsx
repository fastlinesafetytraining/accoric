import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./views/header";
import Footer from "./views/footer";
import ContactPopup from "./views/contactPopup";

function Layout() {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);



  return (
    <>
      <Header openPopup={openPopup} />

      <main>
        <Outlet context={{ openPopup }} />
      </main>

      <Footer openPopup={openPopup} />

      {/* Global Popup */}
      <ContactPopup isOpen={showPopup} onClose={closePopup} />
    </>
  );
}

export default Layout;
