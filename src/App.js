import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Footer from './components/footer/footer';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import ProductListing from './pages/productListing';
import ProductDetails from './components/productDetails/productDetails';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductListing />} />
        <Route exact path='/product/:productID' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
