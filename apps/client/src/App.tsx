import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact';
import { Layout } from './layouts/top-bar.tsx';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { GeneralConditions } from './auth/general-conditions';
import { ForgotPassword } from './auth/forgot-password';

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
          <Route path="conditions" element={<GeneralConditions />} />
          <Route path="password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
