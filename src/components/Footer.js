import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  return (
    <div className="bg-green-geoz text-white px-10 text-center py-5">
      Copyright &copy; GeoZ. All rights reserved. <br />
      <Link to="/impressum">Impressum</Link> |
      <Link to="/rechtliches"> Rechtliches</Link>
    </div>
  );
}
