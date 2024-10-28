import React from "react";
import { Link } from "react-router-dom";
import AdminAccount from './AdminAccount';

function AdminNavBar() {
  return (
    <div>
      <div className="logname">
        <h1>
          E<span>Kart</span>
        </h1>
      </div>
      <div className="links">
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
