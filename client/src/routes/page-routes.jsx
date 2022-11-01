/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layouts/main-layout';
import AuthLayout from 'layouts/auth-layout';
import RegisterPage from 'pages/register-page';
import HomePage from 'pages/home-page';
import RarePlantShelfPage from 'pages/rare-plant-shelf-page';
import CartPage from 'pages/cart-page';
import RarePlantPage from 'pages/rare-plant-page';
import ErrorPage from 'pages/error-page';
import LoginPage from 'pages/login-page';
import ProfilePage from 'pages/profile-page';

import RequireVisitor from './require-visitor';
import RequireAuth from './require-auth';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="rarePlant-shelf" element={<RarePlantShelfPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="rarePlant/:rarePlantId" element={<RarePlantPage />} />
      <Route path="profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />

      <Route path="auth/" element={<RequireVisitor><AuthLayout /></RequireVisitor>}>
        <Route path="login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
        <Route path="register" element={<RequireVisitor><RegisterPage /></RequireVisitor>} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
