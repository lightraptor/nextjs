// src/App.tsx

import React from 'react';
import { categories, items } from './data';
import CategoryList from './components/ListCategory/CategoryList';

const App: React.FC = () => {
  return (
    <>
      <CategoryList categories={categories} items={items} />
    </>
  );
};

export default App;
