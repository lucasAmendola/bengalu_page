import './App.css';
import AboutUsSection from './components/aboutUsSection';
import ContactSection from './components/contactSection';
import HeaderPage from './components/headerPage';
import PresentationBanner from './components/presentationBanner';
import ProductsSection from './components/productSection';
import ServicesSection from './components/servicesSection';
import TecnologiesSection from './components/tecnologiesSection';

function App() {
  return (
    <div className="App">
        <HeaderPage/>
        <PresentationBanner/>
        <AboutUsSection/>
        <ServicesSection/>
        <TecnologiesSection/>
        <ProductsSection/>
        <ContactSection/>
    </div>
  );
}

export default App;
