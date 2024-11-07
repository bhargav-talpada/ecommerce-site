import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AdminAccount';

function AdminNavBar() {
  return (
    <div className="w-full h-10 flex justify-between p-5">
      <div className="">
        <h1 className="text-lg font-medium">
          E<span>Kart</span>
        </h1>
      </div>
      <div className="w-80 flex justify-evenly">
        <Link to="/adminhomepage/addproducts">Add Items</Link>
        <Link to="/adminhomepage/viewproducts">ViewProducts</Link>
        <Link to="/adminhomepage/viewCart">Cart</Link>
      </div>
      <div className="account">
        <AdminAccount />
      </div>
    </div>
  );
}

export default AdminNavBar;
