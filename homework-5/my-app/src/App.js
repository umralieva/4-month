import logo from './logo.svg';
import './App.css';
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactPage from "./pages/contactPage/ContactPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <ContactPage/>
      <PortfolioPage/>
    </div>
  );
}

export default App;
