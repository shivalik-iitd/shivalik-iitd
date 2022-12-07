import { HashRouter as Router } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RepPage from "./pages/RepPage";
// import ContactPage from "./pages/ContactPage";
// import MaintPage from "./pages/MaintPage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <HomePage />
      <AboutPage />
      <RepPage />
      {/* <ContactPage />
			<MaintPage /> */}
      <RootPage />
    </Router>
  );
};

export default App;
