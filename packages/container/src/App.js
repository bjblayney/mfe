import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
// import MarketingApp from './components/MarketingApp';
// import ProductTable from './components/ProductTable';
const ProductTable = React.lazy(() => import('./components/ProductTable'));
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <ProductTable bgColor="#cccccc" />
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
