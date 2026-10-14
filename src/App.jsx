import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Details from './pages/Details';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
