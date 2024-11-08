import React from "react";
import AdminNavBar from "./AdminNavBar";
import { Route, Routes } from "react-router-dom";
import AdminDashBoard from './AdminDashBoard';
import AdminViewItems from './AdminViewItems';
import AdminAddProducts from './AdminAddProducts';
import AdminFooter from "./AdminFooter";

function AdminHomePage() {
  return (
    <div className="h-screen  flex flex-col justify-between">
      <AdminNavBar />
        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/viewproducts" element={<AdminViewItems />} />
          <Route path="/addproducts" element={<AdminAddProducts />} />
        </Routes>
      <AdminFooter />
    </div>
  );
}

export default AdminHomePage;
