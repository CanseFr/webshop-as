import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact';
import { Layout } from './layouts/top-bar.tsx';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './pages/login';
import { Register } from './pages/register';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
