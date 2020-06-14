import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    <h3>404 page not found - <Link to="/">Go home</Link></h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
);

export default NotFoundPage;