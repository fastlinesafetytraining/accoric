import Header from "./views/header";
import Footer from "./views/footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
