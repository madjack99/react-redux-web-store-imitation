import React from 'react';
import withBookstoreService from '../hoc';

import './app.css';

const App = ({ bookstoreService }) => {
  const books = bookstoreService.getBooks();
  return <div>{books}</div>;
};

export default withBookstoreService()(App);
