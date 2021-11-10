import React, { Suspense } from 'react';
// import MarketingApp from './components/MarketingApp';
// import ProductTable from './components/ProductTable';
const ProductTable = React.lazy(() => import('./components/ProductTable'));

export default () => {
  return (
    <div>
      <h1>Hello from container.</h1>
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <ProductTable />
      </Suspense>
    </div>
  );
};
