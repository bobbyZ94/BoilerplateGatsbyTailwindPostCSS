import React from 'react';
import { Link } from 'gatsby';
import logo from '../../static/logo.png';

export default function Header() {
  return (
    <div className="grid grid-rows-2">
      <img
        src={logo}
        alt="logo"
        className="w-2/6 bg-white justify-self-center py-5"
      />
      <div className="bg-green-geoz flex flex-row justify-start navbar h-20">
        <Link to="/">GeoZ</Link>
        <Link to="/leistungen">Leistungen</Link>
        <Link to="/projekte">Projekte</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </div>
  );
}
