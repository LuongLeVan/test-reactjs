import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/category/mobile">Mobile</Link>
      <Link to="/category/tablets">Tablets</Link>
      <Link to="/category/tv">TV</Link>
    </div>
  );
};

export default Sidebar;
