import BuildPage from "./components/apk";
import PrivacyPage from "./components/privacy";
import TermsandConditions from "./components/terms&conditions";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from "./components/services";
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuildPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/termsandconditions" element={<TermsandConditions/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;



