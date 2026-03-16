import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/home";
import AccoricManagement from "./pages/accoricManagement/accoricManagement";
import About from "./pages/about/about";
import Support from "./pages/support/support";
import GettingStarted from "./pages/support/childPages/GettingStarted";
import DashcardAndAccount from "./pages/support/childPages/DashcardAndAccount";
import CertificationReminders from "./pages/support/childPages/CertificationReminders";
import ManageYourCertifications from "./pages/support/childPages/ManageYourCertifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/accoric-management" element={<AccoricManagement />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/getting-started" element={<GettingStarted/>}/>
          <Route path="/support/manage-your-certifications" element={<ManageYourCertifications/>}/>
          <Route path="/support/certifications-reminders" element={<CertificationReminders/>}/>
          <Route path="/support/dashcard-and-account" element={<DashcardAndAccount/>}/>


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;