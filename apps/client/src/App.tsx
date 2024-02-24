import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Contact } from './pages/contact';
import { Layout } from './layouts/top-bar.tsx';
import { Home } from './pages/home';
import { Shop } from './pages/shop';
import { Login } from './auth/login';
import { Register } from './auth/register';
import { ForgotPassword } from './auth/forgot-password';
import { AdminLayout } from './layouts/admin-layout.tsx';
import { AdminHome } from './pages/admin/home';
import { ProtectedRoute } from './common/utils/protected-route.ts';
import {ManageUsers} from "./pages/admin/users";
import {ManageProducts} from "./pages/admin/products";
import {ManageOrders} from "./pages/admin/orders";
import {ManageInvoices} from "./pages/admin/invoices";
import {ManageSupport} from "./pages/admin/support";
import {ManageStats} from "./pages/admin/stats";

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
          <Route path="password" element={<ForgotPassword />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to={'home'} />} />
            <Route path="home" element={<AdminHome />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="orders" element={<ManageOrders />} />
            <Route path="invoices" element={<ManageInvoices />} />
            <Route path="support" element={<ManageSupport />} />
            <Route path="stats" element={<ManageStats />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
