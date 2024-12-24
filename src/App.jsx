import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import EncryptionForm from "./components/EncryptionForm";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";
import VisionBoard from "./components/VisionBoard";

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <Router>
      {isUnlocked ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/vision-board" element={<VisionBoard />} />
        </Routes>
      ) : (
        <EncryptionForm onSuccess={() => setIsUnlocked(true)} />
      )}
    </Router>
  );
};

export default App;
