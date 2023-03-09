import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <ul>
        <li><NavLink to="/projects/Games">Games</NavLink></li>
        <li><NavLink to="/projects/Apps">Apps</NavLink></li>
      </ul>
      <Outlet />
    </div>
  )
}
