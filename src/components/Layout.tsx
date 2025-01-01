import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Categories from './Categories';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Categories />
      <Outlet />
    </div>
  );
}