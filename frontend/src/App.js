import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './pages/navigation';
import Home from './pages/home';
import Web from './pages/web';
import Climb from './pages/climb';
import About from './pages/about';
import Store from './pages/store';
import Thoughts from './pages/thoughts';
import Contact from './pages/contact';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='web/*' element={<Web />} />
          <Route path='climb/*' element={<Climb />} />
          <Route path='about' element={<About />} />
          <Route path='store/*' element={<Store />} />
          <Route path='thoughts/*' element={<Thoughts />} />
          <Route path='contact' element={<Contact />} />
          {/* <Route path='profile' element={<Profile />} /> */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
